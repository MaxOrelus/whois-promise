const whois = require('whois');

module.exports = async (host, options) => {
  return await new Promise((resolve, reject) => {
    whois.lookup(host, options, (error, response) => {
      if (error) {
        reject(error);
      } else if (response) {
        resolve(response);
      } else {
        reject(new Error('Empty Response'));
      }
    });
  }).catch(error => {
    return `Whois request for ${host} was refused.`;
  });
};
