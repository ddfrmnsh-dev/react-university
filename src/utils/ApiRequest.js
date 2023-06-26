// import apiConfig from "./apiConfig";
// import { apiConfig } from "apiConfig";

export default class ApiRequest {
  static set = async (endpoint, method, params) => {
    const base_url = "http://localhost:8000";

    console.log(`[${method}] ${base_url + endpoint}`);

    let url = base_url + endpoint;

    let response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.token
          ? `bearer ${localStorage.token}`
          : null,
        Accept: "application/json",
      },
      body: method === "GET" ? null : JSON.stringify(params),
    });

    if (response.ok) {
      return response.json();
    } else {
      let error = await response.json();
      console.log("error :", error);

      if (error.code === "JWT_EXPIRED") {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.setItem("token_expired", "1");
      }
      throw error;
    }
  };
}
