import axios from "axios";

// Get all AboutMe Hook
export const getAboutMe = async () => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/AboutMe`);
    return res.data;
  } catch (error) {
    console.error("Error fetching all AboutMe:", error.message);
    throw error; // Rethrow the error to be handled by the caller
  }
};
