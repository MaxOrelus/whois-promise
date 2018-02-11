module.exports = (whois, isSequenced) => {
  if (whois.includes('No match for domain')) {
    if (isSequenced) {
      return {};
    }
    return 'No match for domain';
  } else if (whois.includes('no entries found')) {
    if (isSequenced) {
      return {};
    }
    return 'No entries found';
  }

  return whois;
};
