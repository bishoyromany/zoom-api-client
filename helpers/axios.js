import axios from "axios";
import configs from "./../configs/index.js";

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

export { handleAPI };

export default axios;
