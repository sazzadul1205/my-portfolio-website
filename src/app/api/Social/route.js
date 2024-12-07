import connectDB from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
  const db = await connectDB();
  const HeroCollection = db.collection("Social");
  try {
    const Hero = await HeroCollection.find().toArray();
    return NextResponse.json(Hero);
  } catch (error) {
    console.log(error);
  }
};
