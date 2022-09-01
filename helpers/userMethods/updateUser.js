async function updateUser(user) {
  this.method = "updateUser";
  return await this.handleAPI(
    async () => await this.axios.patch(`/users/${this.user.id}`, user)
  );
}

module.exports = updateUser;
