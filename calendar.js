const getDate = function (month) {
  const date = new Date();
  date.setMonth(month - 1);
  return date.toString().split(" ").slice(1, 4);
}

const getNoOfDays = function (month) {
  const date = new Date(2023, month);

  return date.getUTCDate();
}

const getFirstDayIndex = function (month) {
  const date = new Date();
  date.setUTCMonth(month);
  date.setUTCDate(1);

  return date.getUTCDay();
}

const createCalendar = function (month) {
  const daysOfWeek = [" Su", " Mo", " Tu", " We", " Th", " Fr", "Sa"];
  const dates = new Array(7).fill("");
  const noOfDays = getNoOfDays(month);
  const firstDayIndex = getFirstDayIndex(month - 1);
  let index = firstDayIndex;

  for (let date = 1; date <= noOfDays; date++) {
    dates[index++] = date;
  }

  return daysOfWeek.concat(dates);
}

const displayCalender = function (calendar, monthIndex) {
  const [month, currentDay, year] = getDate(monthIndex);

  const cal = calendar.reduce(function (month, day, index) {
    let week = "";
    if (index % 7 === 0) {
      week += "\n";
    }

    if (+currentDay === day) {
      day = "\033[0;31m" + day.toString().padStart(3) + "\033[0m";
    }

    week += day.toString().padStart(3);
    return month + week;
  });

  console.log(month.padStart(10), year.padEnd(10));
  console.log(cal);
}

const main = function () {
  const month = process.argv[2];
  const cal = createCalendar(month);
  displayCalender(cal, month);
}

main();