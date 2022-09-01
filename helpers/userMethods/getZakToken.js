async function getZakToken() {
  this.method = "getZakToken";
  return await this.handleAPI(
    async () =>
      await this.axios.get(`/users/${this.user.id}/token`, {
        params: {
          type: "zak",
          ttl: 7776000,
        },
      })
  );
}

module.exports = getZakToken;
