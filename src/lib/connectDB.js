import { MongoClient, ServerApiVersion } from "mongodb";

let db;

const connectDB = async () => {
  if (db) return db;
  try {
    const uri = process.env.NEXT_PUBLIC_MONGODB_URI;

    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
      tlsAllowInvalidCertificates: true, // Allows invalid certificates (if needed for development)
    });

    await client.connect();
    console.log("Connected to MongoDB Atlas");

    db = client.db("Portfolio");
    return db;
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
    throw new Error("Database connection failed");
  }
};
export default connectDB;

