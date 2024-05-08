import { connectMongoDB } from "@/lib/config/dbConfig";
import User from "@/lib/config/models/user";
import bcryptjs from "bcryptjs";
import { NextResponse, NextRequest } from "next/server";
import validator from "validator";

export async function GET(request: NextRequest) {
  await connectMongoDB();
  try {
    const users = await User.find({});

    if (!users) {
      return NextResponse.json(
        { error: "No users in the database." },
        { status: 400 }
      );
    }

    return NextResponse.json({
      users,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
