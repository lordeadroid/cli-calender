const getDate = function (month, year) {
  const date = new Date(year, month - 1);
  return date.toString().split(" ").slice(1, 4);
};

const getNoOfDays = function (month, year) {
  const date = new Date(year, month);
  return date.getUTCDate();
};

const getFirstDayIndex = function (month, year) {
  const date = new Date(year, month - 1);
  return date.getDay();
};

class Calendar {
  #month;
  #year;

  constructor(month, year = 2023) {
    this.#month = month;
    this.#year = year;
  };

  #createCalendar() {
    const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    const noOfDays = getNoOfDays(this.#month, this.#year);
    const firstDayIndex = getFirstDayIndex(this.#month, this.#year);
    const spaces = new Array(firstDayIndex).fill("");
    const dates = new Array(noOfDays).fill(0).map(function (_, index) {
      return index + 1;
    });

    return daysOfWeek.concat(spaces, dates);
  };

  toString() {
    const [month, _, year] = getDate(this.#month, this.#year);
    const cal = this.#createCalendar();
    const separators = [" ", " ", " ", " ", " ", " ", "\n"];

    const calendar = cal.reduce(function (context, day, index) {
      context += day.toString().padStart(2) + separators[index % 7];
      return context;
    }, "");

    const title = month.padStart(9) + " " + year.padEnd(9) + "\n";
    return title.concat(calendar);
  };
};

exports.Calendar = Calendar;