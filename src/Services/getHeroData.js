import axios from "axios";

// Get all Hero Hook
export const getHeroData = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/Hero`);
    return res.data;
  } catch (error) {
    console.error("Error fetching all Hero:", error.message);
    throw error; // Rethrow the error to be handled by the caller
  }
};
