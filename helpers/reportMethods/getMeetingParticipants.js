async function getMeetingParticipants(id, params = { page_size: 300 }) {
  this.method = "getMeetingParticipants";
  return await this.handleAPI(
    async () => await this.axios.get(`/report/meetings/${id}/participants`, { params })
  );
}

module.exports = getMeetingParticipants;
