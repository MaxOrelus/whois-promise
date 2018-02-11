# Whois Promise

A wrapper around `whois` that returns a Promise with either raw whois data or an object.

## Demo

### Promise

```js
const whois = require('whois-promise');

// raw output
whois.raw('mozilla.org').then(response => {
  console.log(response);
});

// json object output
whois.json('mozilla.org').then(response => {
  console.log(response);
});
```

### Async/Await

```js
const whois = require('whois-promise');

// raw output
(async () => {
  const data = await whois.raw('mozilla.org');

  console.log(data);
})();

// json object output
(async () => {
  const data = await whois.json('mozilla.org');

  console.log(data);
})();
```

## Successful Response

### whois.raw()

```
Domain Name: MOZILLA.ORG
Registry Domain ID: D1409563-LROR
Registrar WHOIS Server: whois.markmonitor.com
Registrar URL: http://www.markmonitor.com
Updated Date: 2016-12-22T10:04:31Z
Creation Date: 1998-01-24T05:00:00Z
Registry Expiry Date: 2019-01-23T05:00:00Z
Registrar Registration Expiration Date:
Registrar: MarkMonitor Inc.
Registrar IANA ID: 292
Registrar Abuse Contact Email: abusecomplaints@markmonitor.com
Registrar Abuse Contact Phone: +1.2083895740
Reseller:
Domain Status: clientDeleteProhibited https://icann.org/epp#clientDeleteProhibited
Domain Status: clientTransferProhibited https://icann.org/epp#clientTransferProhibited
Domain Status: clientUpdateProhibited https://icann.org/epp#clientUpdateProhibited
Registry Registrant ID: C49620406-LROR
Registrant Name: DNS Admin
Registrant Organization: Mozilla Corporation
Registrant Street: 331 E. Evelyn Ave
Registrant City: Mountain View
Registrant State/Province: CA
Registrant Postal Code: 94041
Registrant Country: US
Registrant Phone: +1.6509030800
Registrant Phone Ext:
Registrant Fax:
Registrant Fax Ext:
Registrant Email: hostmaster@mozilla.com
Registry Admin ID: C49620406-LROR
Admin Name: DNS Admin
Admin Organization: Mozilla Corporation
Admin Street: 331 E. Evelyn Ave
Admin City: Mountain View
Admin State/Province: CA
Admin Postal Code: 94041
Admin Country: US
Admin Phone: +1.6509030800
Admin Phone Ext:
Admin Fax:
Admin Fax Ext:
Admin Email: hostmaster@mozilla.com
Registry Tech ID: C49620406-LROR
Tech Name: DNS Admin
Tech Organization: Mozilla Corporation
Tech Street: 331 E. Evelyn Ave
Tech City: Mountain View
Tech State/Province: CA
Tech Postal Code: 94041
Tech Country: US
Tech Phone: +1.6509030800
Tech Phone Ext:
Tech Fax:
Tech Fax Ext:
Tech Email: hostmaster@mozilla.com
Name Server: NS5-65.AKAM.NET
Name Server: NS7-66.AKAM.NET
Name Server: NS4-64.AKAM.NET
Name Server: NS1-240.AKAM.NET
DNSSEC: signedDelegation
URL of the ICANN Whois Inaccuracy Complaint Form: https://www.icann.org/wicf/
>>> Last update of WHOIS database: 2018-02-11T03:53:41Z <<<

For more information on Whois status codes, please visit https://icann.org/epp

Access to Public Interest Registry WHOIS information is provided to assist persons in determining the contents of a domain name registration record in the Public Interest Registry registry database. The data in this record is provided by Public Interest Registry for informational purposes only, and Public Interest Registry does not guarantee its accuracy. This service is intended only for query-based access. You agree that you will use this data only for lawful purposes and that, under no circumstances will you use this data to: (a) allow, enable, or otherwise support the transmission by e-mail, telephone, or facsimile of mass unsolicited, commercial advertising or solicitations to entities other than the data recipient's own existing customers; or (b) enable high volume, automated, electronic processes that send queries or data to the systems of Registry Operator, a Registrar, or Afilias except as reasonably necessary to register domain names or modify existing registrations. All rights reserved. Public Interest Registry reserves the right to modify these terms at any time. By submitting this query, you agree to abide by this policy.
```

### whois.json()

```
{
    "domainName": "MOZILLA.ORG",
    "registryDomainId": "D1409563-LROR",
    "registrarWhoisServer": "whois.markmonitor.com",
    "registrarUrl": "http://www.markmonitor.com",
    "updatedDate": "2016-12-22T10:04:31Z",
    "creationDate": "1998-01-24T05:00:00Z",
    "registryExpiryDate": "2019-01-23T05:00:00Z",
    "registrar": "MarkMonitor Inc.",
    "registrarIanaId": "292",
    "registrarAbuseContactEmail": "abusecomplaints@markmonitor.com",
    "registrarAbuseContactPhone": "+1.2083895740",
    "domainStatus": "clientDeleteProhibited https://icann.org/epp#clientDeleteProhibited clientTransferProhibited https://icann.org/epp#clientTransferProhibited clientUpdateProhibited https://icann.org/epp#clientUpdateProhibited",
    "registryRegistrantId": "C49620406-LROR",
    "registrantName": "DNS Admin",
    "registrantOrganization": "Mozilla Corporation",
    "registrantStreet": "331 E. Evelyn Ave",
    "registrantCity": "Mountain View",
    "registrantStateProvince": "CA",
    "registrantPostalCode": "94041",
    "registrantCountry": "US",
    "registrantPhone": "+1.6509030800",
    "registrantEmail": "hostmaster@mozilla.com",
    "registryAdminId": "C49620406-LROR",
    "adminName": "DNS Admin",
    "adminOrganization": "Mozilla Corporation",
    "adminStreet": "331 E. Evelyn Ave",
    "adminCity": "Mountain View",
    "adminStateProvince": "CA",
    "adminPostalCode": "94041",
    "adminCountry": "US",
    "adminPhone": "+1.6509030800",
    "adminEmail": "hostmaster@mozilla.com",
    "registryTechId": "C49620406-LROR",
    "techName": "DNS Admin",
    "techOrganization": "Mozilla Corporation",
    "techStreet": "331 E. Evelyn Ave",
    "techCity": "Mountain View",
    "techStateProvince": "CA",
    "techPostalCode": "94041",
    "techCountry": "US",
    "techPhone": "+1.6509030800",
    "techEmail": "hostmaster@mozilla.com",
    "nameServer": [
        "NS5-65.AKAM.NET",
        "NS7-66.AKAM.NET",
        "NS4-64.AKAM.NET",
        "NS1-240.AKAM.NET"
    ]
}
```

## Unsuccessful Response

### whois.raw()

```
No match for domain
```

```
No entries found
```

### whois.json()

```
{}
```
