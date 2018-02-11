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
  }

  if (key === 'OriginAS') {
    return lowercaseFirst(key.replace('AS', 'As'));
  }

  if (key.includes('NOC')) {
    return lowercaseFirst(key.replace('NOC', 'Noc'));
  }

  return lowercaseFirst(key);
};
