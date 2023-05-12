const { Calendar } = require("./calendar.js");

const showUsage = function () {
  const usageMessage = "Usage: node main.js month[0-12] [year]";

  console.log(usageMessage);
};

const isValidArgs = function(month) {
  return month === undefined || month > 12 || month < 1;
};

const main = function () {
  const month = process.argv[2];
  if (isValidArgs(month)) {
    showUsage();
    process.exit(127);
  }

  const year = process.argv[3];
  const calendar = new Calendar(month, year);
  console.log(calendar.toString());
};

main();