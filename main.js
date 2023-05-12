const { Calendar } = require("./calendar.js");

const showUsage = function () {
  const usageMessage = "Usage: node calendar.js month[0 - 12] [year]";

  console.log(usageMessage);
}

const main = function () {
  const month = process.argv[2];
  if (month === undefined || month > 12 || month < 1) {
    showUsage();
    return 127;
  }
  const year = process.argv[3];
  const calendar = new Calendar(month, year);
  calendar.toString();
}

main();