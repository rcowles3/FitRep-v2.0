const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
let port = 4200;
const cors = require('cors');
const logger = require('morgan');

// Our scraping tools
const request = require("request");
const cheerio = require("cheerio");

// Model Imports
const BackToBasics = require("./src/models/BackToBasics");
const MaxedOutMuscle = require("./src/models/MaxedOutMuscle");
const CreateUser = require("./src/models/CreateUser");

// DB connections
localDeploy = 'mongodb://localhost/FitRep';
herokuDeploy = '';

// Mongoose connection with mongodb
mongoose.Promise = require('bluebird');
mongoose.connect(localDeploy)
  .then(() => { // if all is ok we will be here
    console.log('Mongoose Connection Successful!');
  })
  .catch(err => { // if error we will be here
    console.error('App starting error:', err.stack);
    process.exit(1);
  });

// Database configuration with mongoose
// mongoose.connect(localDeploy, {
//   useMongoClient: true
// });

// const db = mongoose.connection;

// // Show any mongoose errors
// db.on("error", function (error) {
//   console.log("Mongoose Error: ", error);
// });

// // Once logged in to the db through mongoose, log a success message
// db.once("open", function () {
//   console.log("Mongoose connection successful.");
// });

// Use morgan and body parser with our app
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

// Use middlewares to set view engine and post json data to the server
app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Route Handlers
const dataScrape = require("./src/routes/dataScrape");
const userRoutes = require("./src/routes/userRoutes");
app.use("/api", dataScrape, userRoutes);

// Start the server
app.listen(port, function () {
  console.log('Server is running on Port: ', port);
});
