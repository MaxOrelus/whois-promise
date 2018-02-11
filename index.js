const request = require('./src/utils/request');
const parse = require('./src/utils/parse');
const errorHandler = require('./src/utils/errorHandler');

exports.raw = async host => {
  if (typeof host !== 'string') {
    return new Error('Host value is not a string.');
  }

  const whois = await request(host);

  return errorHandler(whois);
};

exports.json = async host => {
  if (typeof host !== 'string') {
    return new Error('Host value is not a string.');
  }

  const whois = errorHandler(await request(host), true);

  if (typeof whois !== 'string') {
    return whois;
  }

  return await parse(whois, host);
};
