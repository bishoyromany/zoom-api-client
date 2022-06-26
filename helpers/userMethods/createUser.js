async function createUser(body = {}) {
  this.method = "createUser";
  console.log(body);
  return await this.handleAPI(
    async () => await this.axios.post(`/users`, body)
  );
}

export default createUser;

/**
 *
 * @param body
 * @returns
 */

export const createUserSample = {
  action: "custCreate",
  user_info: {
    email: "bishoy2@queensenglish.co",
    type: 2,
    first_name: "Bishoy",
    last_name: "Romany",
    password: "123@queensEnglish",
  },
};
