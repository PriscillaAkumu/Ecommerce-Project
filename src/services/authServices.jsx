import axios from "../config/axiosConfig";

export const login = async (email, password) => {
  try {
    const response = await axios.post("/auth/login", {
      email,
      password
    });
    return response.data;
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const logout = async () => {
  try {
    const response = await axios.post("/auth/logout");
    return response.data;
    
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const refreshToken = async () => {
  try {
    const refreshToken = localStorage.getItem("refreshToken");

    const response = await axios.post("/auth/refresh", {
      refreshToken
    });

    localStorage.setItem("accessToken", response.data.access_token);
    localStorage.setItem("refreshToken", response.data.refresh_token);
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const testRequest = async () => {
  try {
    const response = await axios.post("/dashboard");
    return response.data;
  } catch (error) {
    console.error("Error: ", error);
  }
};
