const http = require("../http");

/**
 * Euro Service API.
 */
class EuroService {

  BASE_URL;

  constructor() {
    this.BASE_URL = "euro";
  };

  async get() {
    const response = await http.get(`${this.BASE_URL}`);
    return response;
  };

  async getEntity(entity = "") {
    const response = await http.get(`${this.BASE_URL}/entity?name=${entity}`);
    return response;
  };

  async toEuro(bs = 0, entity = "") {
    const response = await http.get(`${this.BASE_URL}/toEuro?bs=${bs}&entity=${entity}`);
    return response;
  };

  async toBs(euro = 0, entity = "") {
    const response = await http.get(`${this.BASE_URL}/toBs?euro=${euro}&entity=${entity}`);
    return response;
  };

};

module.exports = EuroService;