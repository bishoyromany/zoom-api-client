async function createCustUser(body = {}) {
  this.method = "createCustUser";
  return await this.handleAPI(
    async () =>
      await this.axios.post(`/users`, { action: "custCreate", user_info: body })
  );
}

export default createCustUser;

/**
 *
 * @param body
 * @returns
 */

export const createCustUserSample = {
  email: "bishoy3@queensenglish.co",
  type: 2,
  first_name: "Bishoy",
  last_name: "Romany",
  password: "123@queensEnglish",
};
