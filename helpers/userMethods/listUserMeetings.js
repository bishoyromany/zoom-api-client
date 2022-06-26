/**
 *
 * @param {} params
 * @returns
 */

const sampleParams = {
  type: "scheduled",
  page_size: 30,
  page_number: 1,
  include_fields: "custom_attributes",
  next_page_token: "IAfJX3jsOLW7w3dokmFl84zOa0MAVGyMEB2",
};

async function method(params = {}) {
  this.method = "listUserMeetings";
  return await this.handleAPI(
    async () =>
      await this.axios.get(`/users/${this.user.id}/meetings`, { params })
  );
}

export default method;
