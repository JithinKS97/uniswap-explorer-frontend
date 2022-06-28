// api-client.js

import axios from "axios";

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    const authToken = localStorage.getItem("Authorisation");
    config.headers["Authorisation"] = `Bearer ${authToken}`;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default axios;
