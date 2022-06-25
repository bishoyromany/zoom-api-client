async function createCustUser(body = {}) {
  this.method = "createCustUser";
  return await this.handleAPI(
    async () =>
      await this.axios.post(`/users`, { action: "custCreate", user_info: body })
  );
}

module.exports = createCustUser;

/**
 *
 * @param body
 * @returns
 */

module.exports.createCustUserSample = {
  email: "bishoy3@queensenglish.co",
  type: 2,
  first_name: "Bishoy",
  last_name: "Romany",
  password: "123@queensEnglish",
};
