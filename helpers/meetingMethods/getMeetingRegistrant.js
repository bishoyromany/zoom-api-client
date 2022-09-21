async function getMeetingRegistrant(meetingId, id) {
  this.method = "getMeetingRegistrant";
  return await this.handleAPI(
    async () => await this.axios.get(`/meetings/${meetingId}/registrants/${id}`)
  );
}

module.exports = getMeetingRegistrant;
