const getDate = function (month, year) {
  const date = new Date(year, month - 1);
  return date.toString().split(" ").slice(1, 4);
}

const getNoOfDays = function (month, year) {
  const date = new Date(year, month);
  return date.getUTCDate();
}

const getFirstDayIndex = function (month, year) {
  const date = new Date(year, month - 1);
  return date.getDay();
}


class Calendar {
  #month;
  #year;

  constructor(month, year = 2023) {
    this.#month = month;
    this.#year = year;
  };

  createCalendar() {
    const daysOfWeek = [" Su", " Mo", " Tu", " We", " Th", " Fr", " Sa"];
    const dates = new Array(7).fill("");
    const noOfDays = getNoOfDays(this.#month, this.#year);
    const firstDayIndex = getFirstDayIndex(this.#month, this.#year);
    let index = firstDayIndex;

    for (let date = 1; date <= noOfDays; date++) {
      dates[index++] = date;
    }

    return daysOfWeek.concat(dates);
  }

  toString() {
    const [month, _, year] = getDate(this.#month, this.#year);

    const cal = this.createCalendar();
    const calendar = cal.reduce(function (month, day, index) {
      let weekRow = "";

      if (index % 7 === 0) {
        weekRow += "\n";
      }

      weekRow += day.toString().padStart(3);

      return month.concat(weekRow);
    });

    console.log(month.padStart(10), year.padEnd(10));
    console.log(calendar);
  }
}

const showUsage = function () {
  const usageMessage = "Usage: node calendar.js month [year]";

  console.log(usageMessage);
}

const main = function () {
  const month = process.argv[2];
  if (month === undefined || month > 12 || month < 1) {
    showUsage();
    return;
  }
  const year = process.argv[3];
  const calendar = new Calendar(month, year);
calendar.toString();
}

main();