import connectDB from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const newMessage = await request.json();
  const db = await connectDB();
  const bookingsCollection = db.collection("Message");

  try {
    const res = await bookingsCollection.insertOne(newMessage);
    return NextResponse.json(
      { message: "Message sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something Went Wrong" },
      { status: 400 }
    );
  }
};
