const capitalize = require('./capitalize');
const lowercaseFirst = require('./lowercaseFirst');

module.exports = (key, isIpWhois = false) => {
  if (!isIpWhois) {
    return (
      key
        // remove slashes
        .replace('/', ' ')
        .split(' ')
        // handle spaces
        .map((str, index) => {
          if (!index) {
            return str.toLowerCase();
          }
          return capitalize(str);
        })
        .join('')
    );
  }

  // edge cases for ARIN whois
  if (key === 'CIDR') {
    return key.toLowerCase();
  } else if (key === 'originAS') {
    return key.replace('AS', 'As');
  } else if (key.includes('NOC')) {
    return lowercaseFirst(key.split('NOC').join('Noc'));
  }

  return lowercaseFirst(key);
};
