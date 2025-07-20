import { NextRequest, NextResponse } from "next/server";

const DUMMY_USER = {
  username: "chitresh",
  password: "securepassword123",
};

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { username, password } = data;

    if (!username || !password) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    if (
      username === DUMMY_USER.username &&
      password === DUMMY_USER.password
    ) {
      return NextResponse.json({
        message: "Sign-in successful",
        user: { username },
      });
    } else {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Signin error:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
