require('dotenv').config()
const { ZoomAPI } = require("./../index");

const { ZOOM_API_KEY, ZOOM_API_SECRET } = process.env;

const test = async () => {
  const client = new ZoomAPI({
    APIKey: ZOOM_API_KEY,
    APISecret: ZOOM_API_SECRET,
  });

  const users = await client.listUsers();

  console.log(users);
};

test();
