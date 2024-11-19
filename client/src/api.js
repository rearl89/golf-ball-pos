import axios from "axios";

// Base URL for the backend API
const API_URL = "http://localhost:5001/api/golfballs";

/**
 * Fetches golf balls from the API.
 * @param {Object} filters - Optional filters for brand and/or condition.
 * @returns {Promise<Array>} - Array of golf balls from the API.
 */
export const fetchGolfBalls = async (filters = {}) => {
  try {
    // Pass filters as query parameters
    const response = await axios.get(API_URL, { params: filters });
    return response.data; // Return the golf ball data
  } catch (error) {
    console.error("Error fetching golf balls:", error.message);
    throw error; // Propagate the error to the caller
  }
};

/**
 * Adds a new golf ball to the database via the API.
 * @param {Object} golfBallData - Data of the new golf ball to add.
 * @returns {Promise<Object>} - The created golf ball from the API.
 */
export const addGolfBall = async (golfBallData) => {
  try {
    const response = await axios.post(API_URL, golfBallData);
    return response.data; // Return the newly created golf ball
  } catch (error) {
    console.error("Error adding a golf ball:", error.message);
    throw error; // Propagate the error to the caller
  }
};
