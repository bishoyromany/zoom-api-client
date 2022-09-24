const generateToken = require("./helpers/generateToken");
const axios = require("./helpers/axios");
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
  getUserByEmail,
  getZakToken,
} = require("./helpers/userMethods");

const {
  updateMeeting,
  getMeetingRegistrant,
  deleteMeetingRegistrant,
  addMeetingRegistrant
} = require("./helpers/meetingMethods");

const {
  getMeetingParticipants
} = require("./helpers/reportMethods");

class ZoomAPI {
  APIKey;
  APISecret;
  JWTToken;
  axios = axios;
  method;
  user;
  constructor({ APIKey, APISecret }) {
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

  init = async () => {
    this.generateToken();
    this.initAxios();
    return this;
  };

  handleAPISuccess = async (data) => {
    console.log(data);
    return data.data;
  };

  handleAPIError = async (data) => {
    return data.response.data;
  };

  setUser = (user) => {
    this.user = user;
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
ZoomAPI.prototype.getUserByEmail = getUserByEmail;
ZoomAPI.prototype.updateUserSettings = updateUserSettings;
ZoomAPI.prototype.getZakToken = getZakToken;

/**
 * meeting methods
 */
ZoomAPI.prototype.updateMeeting = updateMeeting;
ZoomAPI.prototype.getMeetingRegistrant = getMeetingRegistrant;
ZoomAPI.prototype.deleteMeetingRegistrant = deleteMeetingRegistrant;
ZoomAPI.prototype.addMeetingRegistrant = addMeetingRegistrant;

/**
 * Reports methods
 */
ZoomAPI.prototype.getMeetingParticipants = getMeetingParticipants;


ZoomAPI.prototype.handleAPI = axios.handleAPI;
exports.ZoomAPI = ZoomAPI;
