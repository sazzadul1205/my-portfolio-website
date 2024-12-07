import axios from "axios";

// Get all Contact Hook
export const getContact = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/Contact`
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching all Contact:", error.message);
    throw error; // Rethrow the error to be handled by the caller
  }
};
