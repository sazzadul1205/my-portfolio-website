import connectDB from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
  const db = await connectDB();
  const AboutMeCollection = db.collection("AboutMe");
  try {
    const AboutMe = await AboutMeCollection.find().toArray();
    return NextResponse.json(AboutMe);
  } catch (error) {
    console.log(error);
  }
};
