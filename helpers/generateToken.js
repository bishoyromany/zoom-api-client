const jwt = require("jsonwebtoken");

const generateToken = (API_KEY, API_SECRET) => {
  const payload = {
    iss: API_KEY,
    exp: new Date().getTime() + 50000,
  };

  const token = jwt.sign(payload, API_SECRET);
  return token;
};

module.exports = generateToken;
