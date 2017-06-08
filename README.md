# CRUD-API
Test assignment.

mongoose.config.js      - contains mongoose configuration data

app.js                  - Express server that also contains API routes.

computer.model.js       - contains mongoose schema for our computer model.

script.js               - handling frontend requests to the API.

mongoInit.js            - creates "testAPI" database and adds 2 documents to "computers" collection.

For first time setup run "npm install"

"npm start" runs babel and starts the server.

It's implied that MongoDB is installed on local environment is running on port 27017 and user has access to it. It uses "testAPI" database which will be created automatically upon starting the server. To add mock data to database, run mongo shell from the project directory and use command load("mongoInit.js").
