const request = require('./src/utils/request');
const parse = require('./src/utils/parse');
const errorHandler = require('./src/utils/errorHandler');

exports.raw = async (host, options) => {
  if (typeof host !== 'string') {
    return new Error('Host value is not a string.');
  }

  return await request(host, options);
};

exports.json = async (host, options) => {
  if (typeof host !== 'string') {
    return new Error('Host value is not a string.');
  }

  const whois = errorHandler(await request(host, options));

  if (typeof whois !== 'string') {
    return whois;
  }

  return await parse(whois, host);
};
