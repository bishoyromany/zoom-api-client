async function deleteUsers(users) {
  this.method = "deleteUsers";
  const response = [];
  for (let user of users) {
    response.push(
      await this.handleAPI(
        async () =>
          await this.axios.delete(`/users/${user.id}`, {
            params: { action: "delete" },
          })
      )
    );
  }
  return response;
}

module.exports = deleteUsers;
