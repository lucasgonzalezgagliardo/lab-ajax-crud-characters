class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios
    .get(`${this.BASE_URL}/characters`)
    .then((response) => {
      console.log("data:", response.data);
      return response.data;
    })
    .catch((err) => console.log(err));
  }

  getOneRegister (id) {
    return axios
    .get(`${this.BASE_URL}/characters/${id}`)
    .then(result => {
      console.log(result.data);
    return result.data;
    })
  }

  createOneRegister ({name, weapon, cartoon, occupation}) {
    return axios
    .post(`${this.BASE_URL}/characters`)
    .then(result => {
      console.log(result.data)
      return result.data
    })
  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
