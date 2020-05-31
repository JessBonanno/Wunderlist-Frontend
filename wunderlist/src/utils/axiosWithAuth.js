import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
  
    return axios.create({
      // baseURL: "https://wunderlist2020.herokuapp.com/api",
      baseURL: "http://localhost:4000/api",

      headers: {
        Authorization: token,
      },
    });
  };
  