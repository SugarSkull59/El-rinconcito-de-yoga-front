import axios from "axios";

const APIMAPS = axios.create({
  baseURL:
    "http://maps.googleapis.com/maps/api/js?key=AIzaSyDgsPsG5K74Lzf5xEe7rrFPvR6oFPeJx64&callback=initMap",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});
export default {
  async signup(newUser) {
    const response = await APIMAPS.get("", {
      ...newUser
    });
    return response.data;
  }
};
