import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectMongoDB } from "@/lib/config/dbConfig";
import User from "@/lib/config/models/auth";
import bcryptjs from "bcryptjs";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        try {
          await connectMongoDB();
          const user = await User.findOne({ email });

          if (!user) {
            console.log("No user found.");
            return null;
          }

          const passwordMatch = await bcryptjs.compare(password, user.password);

          if (!passwordMatch) {
            console.log("Password dont match.");
            return null;
          }

          return user;
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },

    async session({ session, token }: { session: any; token: any }) {
      if (session.user) {
        session.user.email = token.email;
        session.user.name = token.name;
      }
      console.log("SESSION: ", session);
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET!,
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
