const configs = require("./../configs/index");
const axios = require("axios");

axios.defaults.baseURL = configs.API_URL;

async function handleAPI(callback, success = false, fail = false) {
  try {
    if (success) {
      return await success(await callback());
    } else {
      return this.handleAPISuccess(await callback());
    }
  } catch (e) {
    if (fail) {
      await fail(e);
    }

    return await this.handleAPIError(e);
  }
}

module.exports = axios;

module.exports.handleAPI = handleAPI;
