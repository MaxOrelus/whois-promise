module.exports = (whois, isSequenced) => {
  if (
    whois.includes('No match for domain') ||
    whois.includes('no entries found')
  ) {
    return {};
  }

  return whois;
};
