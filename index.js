import generateToken from "./helpers/generateToken.js";
import axios, { handleAPI } from "./helpers/axios.js";
import userMethods from "./helpers/userMethods/index.js";
import meetingMethods from "./helpers/meetingMethods/index.js";

const {
  listUsers,
  createUser,
  checkUserEmail,
  listUserMeetings,
  createUserMeeting,
  createCustUser,
  deleteUser,
  deleteUsers,
  updateUser,
  updateUserSettings,
} = userMethods;

const { updateMeeting } = meetingMethods;

class ZoomAPI {
  APIKey;
  APISecret;
  JWTToken;
  axios = axios;
  method;
  user;
  constructor(APIKey, APISecret) {
    this.APIKey = APIKey;
    this.APISecret = APISecret;
    this.init();
  }

  generateToken = () => {
    this.JWTToken = generateToken(this.APIKey, this.APISecret);
    return this;
  };

  initAxios = () => {
    this.axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${this.JWTToken}`;
  };

  init = () => {
    this.generateToken();
    this.initAxios();
    return this;
  };

  handleAPISuccess = async (data) => {
    return data.data;
  };

  handleAPIError = async (data) => {
    return data.response.data;
  };

  setUser = (user) => {
    this.user = user;
  };

  customCall = (...params) => {
    return this.axios(...params);
  };
}

ZoomAPI.prototype.listUsers = listUsers;
ZoomAPI.prototype.createUser = createUser;
ZoomAPI.prototype.checkUserEmail = checkUserEmail;
ZoomAPI.prototype.listUserMeetings = listUserMeetings;
ZoomAPI.prototype.createUserMeeting = createUserMeeting;
ZoomAPI.prototype.createCustUser = createCustUser;
ZoomAPI.prototype.deleteUser = deleteUser;
ZoomAPI.prototype.deleteUsers = deleteUsers;
ZoomAPI.prototype.updateUser = updateUser;
ZoomAPI.prototype.updateUserSettings = updateUserSettings;
ZoomAPI.prototype.updateMeeting = updateMeeting;
ZoomAPI.prototype.handleAPI = handleAPI;

export default ZoomAPI;
