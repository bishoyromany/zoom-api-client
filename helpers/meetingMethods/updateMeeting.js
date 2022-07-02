async function updateMeeting(meetingId, meeting) {
  this.method = "updateMeeting";
  return await this.handleAPI(
    async () => await this.axios.patch(`/meetings/${meetingId}`, meeting)
  );
}

export default updateMeeting;
