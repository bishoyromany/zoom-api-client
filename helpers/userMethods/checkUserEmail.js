/**
 *
 * @param email string
 * @returns
 */

async function method(email) {
  this.method = "checkUserEmail";
  return await this.handleAPI(
    async () => await this.axios.get(`/users/email`, { params: { email } })
  );
}

export default method;
