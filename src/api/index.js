module.exports = require("./http");

const DollarAPI = require("./dollar/Dollar.Service");
const EuroAPI = require("./euro/Euro.Service");

module.exports = {
  DollarAPI,
  EuroAPI
};