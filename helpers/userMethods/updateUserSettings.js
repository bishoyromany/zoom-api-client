async function updateUserSettings(settings) {
  this.method = "updateUserSettings";
  return await this.handleAPI(
    async () =>
      await this.axios.patch(`/users/${this.user.id}/settings`, settings)
  );
}

module.exports = updateUserSettings;
