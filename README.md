# Todo-vue
Vuejs application using todo-api project.  
## Project setup
### Docker
#### /!\ You must set up todo-api project before!
just run docker compose command as usual
```
docker-compose -f ./docker-compose.yml up -d --build
```
### Without Docker
copy ./docker/nodejs/package.json to project folder
```
# Install dependencies
npm install
# Compiles and hot-reloads for development
npm run serve
# Compiles and minifies for production
npm run build 
```
## Mock API (json-server)
You can use json-server to mock todo-api project.  
doc : https://www.npmjs.com/package/json-server  
- install json-server by npm globally :  
`sudo npm install json-server -g`  
- run json server with json-server-db.json file :  
`json-server --watch test/mock/json-server-db.json`  
- output :
```
  \{^_^}/ hi!

  Loading test/mock/json-server-db.json
  Done

  Resources
  http://localhost:3000/todos

  Home
  http://localhost:3000

  Type s + enter at any time to create a snapshot of the database
  Watching...
```
- then update .env file :
```
VUE_APP_API_HOST=http://localhost:3000/
```
_-- only GET /todos available_