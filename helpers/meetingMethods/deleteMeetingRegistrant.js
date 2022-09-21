async function deleteMeetingRegistrant(meetingId, id) {
  this.method = "deleteMeetingRegistrant";
  return await this.handleAPI(
    async () => await this.axios.delete(`/meetings/${meetingId}/registrants/${id}`)
  );
}

module.exports = deleteMeetingRegistrant;
