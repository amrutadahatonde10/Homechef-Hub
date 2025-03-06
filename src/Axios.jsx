import axios from "axios";


const Axios = (baseURL = `https://67a71bbe510789ef0dfcfdc7.mockapi.io/api/`,additionalHeaders = {}) => {
  return axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
       ...additionalHeaders,
    },
  });
};

export default Axios