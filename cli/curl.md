Metascan API examples using curl
--------------------------------

Variables needed:
``` bash
API_KEY_HEADER="apikey: d7d77e87052554af73afb85134436eZ6"
```

Number of files in queue:
``` bash
curl -X GET  -H ${API_KEY_HEADER} https://scan.metadefender.com/v2/file/inqueue
```
Initiate scan request:
``` bash
curl -X POST -H ${API_KEY_HEADER} -d requests.txt https://scan.metadefender.com/v2/file
```
Query scan result based on data_id:
``` bash
curl -X GET  -H ${API_KEY_HEADER} \
     https://scan.metadefender.com/v2/file/6d21e9cdfd3b42b49e3c26d79d1e26c2
```
Query scan result based on hash:
``` bash
curl -X GET  -H ${API_KEY_HEADER} \
     https://scan.metadefender.com/v2/hash/6DEE577D0F6C749414EA0D638507E5EA
```
Hint: if generating your own hash returns not found, use the hash found in data_id based result.

Query scan result based on multiple hashes:
``` bash
curl -X post -H ${API_KEY_HEADER} -d '{"hash": ["6DEE577D0F6C749414EA0D638507E5EA"]}' \
     https://hashlookup.metadefender.com/v2/hash/
```
Scan IP address:
``` bash
curl -X GET -H ${API_KEY_HEADER} https://ipscan.metadefender.com/v1/scan/177.140.22.150
```
Scan multiple IP addresses :
``` bash
curl -X post -H ${API_KEY_HEADER} -d {"address":["198.15.127.170","bugment.net"]} \
     https://ipscan.metadefender.com/v1/scan
```
