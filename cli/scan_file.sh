#!/bin/bash

FILE=$1
LOG="/tmp/scan_request.txt"
APIKEY="your api key"

echo "[Info] Initiate scan request ..."
curl -X POST -H "apikey: ${APIKEY}" -H "filename: $(basename ${FILE})"  -d ${FILE} https://scan.metadefender.com/v2/file 2> /dev/null | python -m json.tool | tee $LOG

# Retrieve scan report using data_id
echo "[Info] Retrieve scan report ..."
DATAID=$(cat "${LOG}" | grep "data_id" | tr -d '"' | sed 's/data_id://' | sed 's/,// '| tr -d " " )
sleep 10
curl -X GET -H "apikey: ${APIKEY}" https://scan.metadefender.com/v2/file/${DATAID} 2> /dev/null | python -m json.tool 

