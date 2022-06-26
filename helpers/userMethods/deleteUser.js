async function deleteUser() {
  this.method = "deleteUser";
  return await this.handleAPI(
    async () =>
      await this.axios.delete(`/users/${this.user.id}`, {
        params: { action: "delete" },
      })
  );
}

export default deleteUser;
