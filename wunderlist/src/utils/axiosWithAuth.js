import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
  
    return axios.create({
      baseURL: "https://wunderlist-1-bw.herokuapp.com",
      headers: {
        Authorization: token,
      },
    });
  };
  