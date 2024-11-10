import axios from "axios";


const baseURL = process.env.REACT_APP_API_BASE_URL;


export const fetchData = async (endpoint) => {
  try {
    const response = await axios.get(`${baseURL}${endpoint}`);
    return response.data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

export const postData = async (endpoint, data, config = {}) => {
    try {
      const response = await axios.post(`${baseURL}${endpoint}`, data, config);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  

