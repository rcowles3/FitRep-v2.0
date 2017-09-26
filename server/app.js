let express = require('express');
let app = express();
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let port = 4200;
let cors = require('cors');
let logger = require('morgan');

// Our scraping tools
let request = require("request");
let cheerio = require("cheerio");

// Model Imports
let BackToBasics = require("./src/models/BackToBasics");
let MaxedOutMuscle = require("./src/models/MaxedOutMuscle");

// DB connections
localDeploy = 'mongodb://localhost/FitRep';
herokuDeploy = '';

// Use morgan and body parser with our app
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

// Make public a static dir
app.use(express.static("public"));

// Database configuration with mongoose
mongoose.connect(localDeploy, {
  useMongoClient: true
});

let db = mongoose.connection;

// Show any mongoose errors
db.on("error", function (error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function () {
  console.log("Mongoose connection successful.");
});

// Required application specific custom router module for our Data Scraper
let dataScrape = require("./src/routes/dataScrape");
app.use("/api", dataScrape);

// Use middlewares to set view engine and post json data to the server
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Start the server
app.listen(port, function () {
  console.log('Server is running on Port: ', port);
});
