import ApiRequest from "../utils/ApiRequest";

export default class User {
  static userRegister = async (params) => {
    return await ApiRequest.set("/api/register", "POST", params);
  };

  static userLogin = async (params) => {
    return await ApiRequest.set("/api/login", "POST", params);
  };
}
