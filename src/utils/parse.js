const validator = require('validator');
const formatKey = require('./formatKey');

const MAYBE_WHOIS_FIELD = /^([a-zA-Z])([a-zA-Z\/\s])+:.*$/i;

module.exports = async (whois, host) => {
  const isIP = validator.isIP(host);
  const isFQDN = validator.isFQDN(host);

  let whoisArr;
  if (isIP || isFQDN) {
    whoisArr = whois.split('\n').map(str => str.trim());
  } else {
    return {};
  }

  let tmpO = whoisArr
    .filter(str => MAYBE_WHOIS_FIELD.test(str))
    .map(str => {
      let [key, value] = str.split(': ').map(str => str.trim());

      if (!value) {
        return undefined;
      }

      return [key, value];
    })
    .filter(innerArr => innerArr)
    .reduce((acc, innerArr) => {
      let [key, value] = innerArr;

      if (isIP) {
        key = formatKey(key, true);
      } else if (isFQDN) {
        key = formatKey(key);
      }

      // exception to the duplicate key rule below -- domainStatus provide array of values
      if (key === 'domainStatus') {
        acc[key] = acc[key] ? [...acc[key], value] : [value];

        return acc;
      }

      // duplicate keys -- append values all together
      if (acc[key]) {
        acc[key] = [acc[key], value].join(' ');

        return acc;
      }

      acc[key] = value;

      return acc;
    }, {});

  /* EDGE CASES */
  // remove all keys after dnssec for domain whois
  if (tmpO.dnsSec) {
    let keys = Object.keys(tmpO).slice(
      0,
      Object.keys(tmpO).indexOf('dnsSec') + 1
    );

    for (let key in tmpO) {
      if (!keys.includes(key)) {
        delete tmpO[key];
      }
    }
  }

  // provie array of name servers
  if (tmpO.nameServer) {
    tmpO.nameServer = tmpO.nameServer.split(' ');
  }

  return tmpO;
};
