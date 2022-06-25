require("dotenv").config({ path: "./../../schedule-api/.env" });
const { ZoomAPI } = require("./../index");
const {
  createCustUserSample,
} = require("./../helpers/userMethods/createCustUser");
const {
  createUserMeetingSample,
} = require("./../helpers/userMethods/createUserMeeting");

const { ZOOM_API_KEY, ZOOM_API_SECRET } = process.env;

const test = async () => {
  const zoomClient = new ZoomAPI(ZOOM_API_KEY, ZOOM_API_SECRET);
  zoomClient.init();
  zoomClient.setUser({
    id: "uJP0VnmySUW553pEc6T0Aw",
    first_name: "Bishoy",
    last_name: "Romany",
    email: "bishoy2@queensenglish.co",
    type: 2,
    pmi: 4838666361,
    timezone: "",
    verified: 1,
    created_at: "2022-06-20T20:35:47Z",
    language: "en-US",
    status: "active",
    role_id: "2",
  });
  const users = await zoomClient.listUsers();
  const deleted = await zoomClient.deleteUsers(users.users);
  // const createdUser = await zoomClient.createCustUser(createCustUserSample);
  // const createUserMeeting = await zoomClient.createUserMeeting(
  //   createUserMeetingSample
  // );
  // const meetings = await zoomClient.listUserMeetings();
  console.log(users, deleted);
};

test();
