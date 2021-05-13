#!/bin/bash

curl "https://tic-tac-toe-api-production.herokuapp.com/sign-up" \
--include \
--request POST \
  --header "Content-type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password":  "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'

echo
