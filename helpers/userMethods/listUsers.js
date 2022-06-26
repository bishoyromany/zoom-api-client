/**
 *
 * @param {
 *  status: string,
 *  page_size: number,
 *  role_id: number,
 *  page_number: number,
 *  include_fields: string,
 *  next_page_token: string,
 * } params
 * @returns
 */

const sampleParams = {
  status: "active",
  page_size: 30,
  role_id: 0,
  page_number: 1,
  include_fields: "custom_attributes",
  next_page_token: "IAfJX3jsOLW7w3dokmFl84zOa0MAVGyMEB2",
};

async function listUsers(params = {}) {
  this.method = "listUsers";
  return await this.handleAPI(
    async () => await this.axios.get(`/users`, { params })
  );
}

export default listUsers;
