import { connectMongoDB } from "@/lib/config/dbConfig";
import User from "@/lib/config/models/auth";
import bcryptjs from "bcryptjs";
import { NextResponse, NextRequest } from "next/server";
import validator from "validator";

export async function POST(request: NextRequest) {
  await connectMongoDB();
  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "All fields must be filled." },
        { status: 400 }
      );
    }

    if (!validator.isEmail(email)) {
      return NextResponse.json({ message: "Invalid email." }, { status: 400 });
    }

    if (!validator.isStrongPassword(password)) {
      return NextResponse.json({ message: "Weak password." }, { status: 400 });
    }

    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
