import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://unofficial-cricbuzz.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "f9c57598c0msh58016ad1238df50p167927jsnd3210936f215",
    "X-RapidAPI-Host": "unofficial-cricbuzz.p.rapidapi.com",
  }
});

export default axiosInstance;
