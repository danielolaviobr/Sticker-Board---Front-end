import axios from "axios";

const api = axios.create({
  baseURL: "https://sticker-board.herokuapp.com"
});

export default api;
