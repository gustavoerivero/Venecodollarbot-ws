const http = require("../http");

const { AxiosResponse } = require("axios");

/**
 * @typedef {{
 *  title: string,
 *  euro?: number,
 *  dollar?: number,
 *  updatedDate: string,
 *  image?: string,
 *  difference?: number,
 *  differencePercentage?: string,
 *  tendency?: string,
 *  tendencyColor?: string
 * }} TEntityInfo
 */

/**
 * @typedef {{
 *  entity: string,
 *  info: TEntityInfo,
 *  euroCalculated?: number,
 *  dollarCalculated?: number,
 *  bolivarCalculated?: number
 * }} TEntity
 */

/**
 * @typedef {{
 *  date?: string,
 *   average?: number,
 *   entities?: TEntity[],
 *   entity?: string,
 *   info?: TEntityInfo,
 *   dollarCalculated?: number,
 *   euroCalculated?: number,
 *   bolivarCalculated?: number
 * }} TData
 */

/**
 * @typedef {{
 *   OK: number,
 *   Data: TData,
 * }} TResponseData
 */

/**
 * Dollar Service API.
 */
class DollarService {

  /**
   * @private
   * @type {string}
   */
  BASE_URL;

  /**
   * @constructor
   */
  constructor() {
    this.BASE_URL = "dollar";
  }

  /**
   * @public
   * @async
   * @returns {Promise<AxiosResponse<TResponseData>>}
   */
  async get() {
    const response = await http.get(`${this.BASE_URL}`);
    return response;
  };

  /**
   * @public
   * @async
   * @param {string} entity
   * @returns {Promise<AxiosResponse<TResponseData>>}
   */
  async getEntity(entity = "") {
    const response = await http.get(`${this.BASE_URL}/entity?name=${entity}`);
    return response;
  };

  /**
   * @public
   * @async
   * @param {number} bs
   * @param {string} entity
   * @returns {Promise<AxiosResponse<TResponseData>>}
   */
  async toDollar(bs = 0, entity = "") {
    const response = await http.get(`${this.BASE_URL}/toDollar?bs=${bs}&entity=${entity}`);
    return response;
  };

  /**
   * @public
   * @async
   * @param {number} euro
   * @param {string} entity
   * @returns {Promise<AxiosResponse<TResponseData>>}
   */
  async toBs(dollar = 0, entity = "") {
    const response = await http.get(`${this.BASE_URL}/toBs?dollar=${dollar}&entity=${entity}`);
    return response;
  };

};

module.exports = DollarService;