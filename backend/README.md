### Local Application Run

node index.js

## Routes
http://localhost:5050
GET : http://localhost:5050/services

## TODO

- Update Services Collection {Post}

curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"email":"xyzabcd@xyz.com","id":"123"}' \
  http://localhost:5050/services/

- Delete Services Collection {Post}


