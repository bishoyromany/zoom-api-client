async function getUserByEmail(email) {
  const params = {
    page_size: 300,
    page_number: 1,
    status: "active",
  };

  this.method = "getUserByEmail";
  let done = false;
  let user = {};

  while (!done) {
    const data = await this.handleAPI(
      async () => await this.axios.get(`/users`, { params })
    );

    for (let u of data.users) {
      if (u.email.split("@")[0] == email.split("@")[0]) {
        user = u;
        break;
      }
    }

    if (data.page_number == data.page_count || user.id) {
      done = true;
    }
    params.page_number += 1;
  }

  return user;
}

module.exports = getUserByEmail;
