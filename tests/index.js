require("dotenv").config();
const ZoomAPI = require("./../index");

const { ZOOM_API_KEY, ZOOM_API_SECRET } = process.env;

const test = async () => {
  const zoomClient = new ZoomAPI(ZOOM_API_KEY, ZOOM_API_SECRET);
  zoomClient.setUser({ id: "userid", email: "user email" });

  const users = await zoomClient.listUsers();

  console.log(users);
};

test();
