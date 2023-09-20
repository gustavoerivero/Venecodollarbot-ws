const { addKeyword } = require("@bot-whatsapp/bot");

const { getDate, dateFormatter } = require("../../utils");
const { DollarAPI } = require("../../api")

const answer = () => {
  const { dayWeek } = getDate(new Date()) ?? "";
  const date = dateFormatter();

  return `*Valores del dólar al ${dayWeek.toLowerCase()} ${date}*\n`;
};

const dolar = addKeyword(["dolar", "dollar"])
  .addAnswer(
    answer(),
    null,
    async (ctx, { flowDynamic }) => {

      let message = "";

      try {

        const dollarAPI = new DollarAPI();

        const response = await dollarAPI.get();
        const data = response?.data?.Data;

        if (data?.entities) {
          const { entities, average } = data;

          for (const entity of entities) {
            message += entityMessage(entity);
          }

          message += `\n*Promedio general: Bs. ${average}*`;
        }

      } catch (error) {
        console.error(error);
      } finally {
        await flowDynamic({
          body: message ?? "Oops"
        });
      }

    });

/**
 * 
 * @param {TEntity} entity 
 * @returns 
 */
const entityMessage = (entity) => {
  let message = "";
  const name = entity.info.title.split("@");
  const title = name[1] ? name[1] : name[0];
  const dollar = entity.info.dollar;
  const updatedDate = entity.info.updatedDate;

  let percentage = entity.info.differencePercentage;
  let tendency = "";

  if (entity.info.tendencyColor === "green") {
    tendency = percentage + " 📈";
  } else if (entity.info.tendencyColor === "red") {
    tendency = "-" + percentage + " 📉";
  } else {
    tendency = percentage + " 🟰";
  }

  if (dollar && dollar > 0) {
    message += `\n- *${title}* -\nDólar: Bs. ${dollar}\nTendencia: ${tendency}\nFecha de actualización: ${updatedDate}\n`;
  }

  return message;
}

module.exports = { dolar };

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