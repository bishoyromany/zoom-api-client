async function addMeetingRegistrant(id, user) {
  this.method = "addMeetingRegistrant";
  return await this.handleAPI(
    async () => await this.axios.post(`/meetings/${id}/registrants`, user)
  );
}

module.exports = addMeetingRegistrant;
