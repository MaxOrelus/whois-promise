const whois = require('./');

whois.json('172.217.3.46').then(res => console.log(res));