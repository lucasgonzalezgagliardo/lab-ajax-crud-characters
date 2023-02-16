class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios
    .get(this.BASE_URL + "/characters")
    .then((response) => {
      console.log("data:", response.data);
      return response.data;
    })
    .catch((err) => console.log(err));
  }

  getOneRegister () {

  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
