import { NextRequest,NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    try{
        const data = await req.json();

    const {username,password} = data;
    
    if(!username || !password){
        return NextResponse.json(
        {message:"Missing required fields"},
        {status:400}
        )
    }
 
    return NextResponse.json({
        message:"You have been signed up",
        user:{username}
    });
    }catch(error){
        console.error("Signup error:",error)
        return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
    }
}