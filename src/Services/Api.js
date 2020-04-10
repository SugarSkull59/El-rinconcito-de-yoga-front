import axios from "axios";

const API = axios.create({
  baseURL: "https://el-rinconcito-de-yoga.herokuapp.com/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  async signup(newUser) {
    const response = await API.post("/auth/signup", {
      ...newUser
    });
    return response.data;
  },
  async login(user) {
    const response = await API.post("/auth/login", {
      ...user
    });
    return response.data;
  },

  async getCenters() {
    const response = await API.get("/centers");
    return response.data;
  },

  async getCenter(centerId) {
    const response = await API.get(`/centers/${centerId}`);
    return response.data;
  },

  async getUser(userId) {
    const response = await API.get(`/users/${userId}`, {
      headers: {
        token: localStorage.getItem("token")
      }
    });
    return response.data;
  }
};
