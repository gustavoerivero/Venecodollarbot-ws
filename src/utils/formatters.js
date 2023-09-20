const locale = process.env.LOCALE ?? "es-VE"
const timeZone = process.env.TIMEZONE ?? "America/Caracas"

const months = [
  "Enero", "Febrero", "Marzo",
  "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre",
  "Octubre", "Noviembre", "Diciembre"
]

const days = [
  "Domingo", "Lunes", "Martes", "Miércoles", 
  "Jueves", "Viernes", "Sábado"
]

const options = { timeZone }

/**
 * Method to get the hour from a date string or Date object.
 * @param {string | Date | null} date - The date to extract the hour from.
 * @returns {string} The formatted hour in HH:mm AM/PM format.
 * @throws {Error} If the date value is missing or in an invalid format.
 */
const getHour = (date) => {
  try {
    if (!date) {
      throw Error("The date value must exist in date or string format.");
    }

    let localDate;

    if (typeof date === "string") {
      localDate = new Date(date);
    } else {
      localDate = date;
    }

    return localDate.toLocaleTimeString(locale, options);
  } catch (error) {
    throw Error(`Error trying to get the hour: ${error}`);
  }
};

/**
 * Method to get the formatted date information from a Date object.
 * @param {Date} date - The date to extract the information from (default: current date).
 * @returns {TDate} An object containing the day of the week, day of the month, month, and year.
 * @throws {Error} If there is an error while retrieving the date information.
 */
const getDate = (date = new Date()) => {
  try {

    const d = new Date(date);

    return {
      dayWeek: days[d.getDay()],
      day: d.getDate(),
      month: months[d.getMonth()].toLowerCase(),
      year: d.getFullYear()
    };

  } catch (error) {
    throw Error(`Error trying to get the date: ${error}`);
  }
};

/**
 * Formats a date to "hh:mm a dd/MM/yyyy" format in the America/Caracas timezone.
 * @param date The date to format. If not provided, the current date and time will be used.
 * @returns The formatted date string, or null if an error occurred during formatting.
 */
const dateFormatter = (date = new Date()) => {
  try {

    // Convert the date to the timezone
    return date.toLocaleString(locale, options);

  } catch (error) {
    console.log("Error trying to format date:", error);
    return null;
  }
}

module.exports = {
  // Time environment variables
  locale,
  timeZone,

  // Time variables
  days,
  months,

  // Time functions
  getHour,
  getDate,
  dateFormatter
};

/**
 * @typedef {{
 *  dayWeek: string;
 *  day: number;
 *  month: string;
 *  year: string;
 * }} TDate
 */