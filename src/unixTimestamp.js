const milliseconds = require('./milliseconds');
const unixTimestamp = (date = Date.now()) => {
  return Math.floor(date / milliseconds);
};

module.exports = unixTimestamp;