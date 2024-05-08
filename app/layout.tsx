import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import { Montserrat } from "next/font/google";
import AuthProvider from "./components/Provider";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learnify",
  description: "Learn to Fly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <AuthProvider>
          <ToastContainer />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
