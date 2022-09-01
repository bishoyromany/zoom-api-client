async function updateMeeting(id, meeting) {
  this.method = "updateMeeting";
  return await this.handleAPI(
    async () => await this.axios.patch(`/meetings/${id}`, meeting)
  );
}

module.exports = updateMeeting;
