import connectDB from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
  const db = await connectDB();
  const ContactCollection = db.collection("Contact");
  try {
    const Contact = await ContactCollection.find().toArray();
    return NextResponse.json(Contact);
  } catch (error) {
    console.log(error);
  }
};
