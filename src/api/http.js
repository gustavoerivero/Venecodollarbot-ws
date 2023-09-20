/**
 * @type {axios.AxiosInstance}
 */
const axios = require("axios");

/**
 * Venecodollar's baseURL
 * @type {string}
 */
const baseURL = process.env.API_URL ?? "";

/**
 * Venecodollar API Service
 * @type {axios.AxiosInstance}
 */
const http = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }
});

module.exports = http;

/**
 * Venecodollar API Service
 * @exports http 
 * @exports baseURL
 */
module.exports = { baseURL }