import axios from "axios";

// Get all Hero Hook
export const getSocial = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/Social`
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching all Social:", error.message);
    throw error; // Rethrow the error to be handled by the caller
  }
};
