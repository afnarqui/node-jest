npm init --yes
npx eslint --init
npm i -D prettier eslint-config-prettier eslint-plugin-prettier

npm run lint
npm run format
npm i express -S
npm i --save-dev nodemon
npm i pino -S
npm i pino-http -S
npm i dotenv -S
curl.so
npm i body-parser -S

````bash
curl -X POST -H "Content-Type: application/json" \
  -d '{"name": "afn", "address": "fake address", "age": "38", "uid": "abc"}' \
    http://localhost:3001/users

curl -X POST -H "Content-Type: application/json" \
  -d '{"name": "carlos", "address": "fake carlos", "age": "48", "uid": "abcd"}' \
    http://localhost:3001/users    

curl -X GET http://localhost:3001/users    

curl -X GET http://localhost:3001/users/{abc}

curl -X PUT -H "Content-Type: application/json" \
  -d '{"name": "carlos update", "address": "fake carlos upd", "age": "49", "uid": "abcd"}' \
    http://localhost:3001/users/abcd 

curl -X DELETE http://localhost:3001/users/abcd


````    

npm i jest supertest -D
npm i eslint-plugin-jest -D
