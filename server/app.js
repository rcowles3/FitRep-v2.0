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

// Data Scraper
// let DataScraper = require("./src/routes/DataScraper");
// app.use("/api/scrape", DataScraper);

// DB connections
localDeploy = 'mongodb://localhost/fitrep';
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

// Required application specific custom router module
// let itemRouter = require('./src/routes/itemRoutes');

// Use middlewares to set view engine and post json data to the server
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use('/items', itemRouter);

// Workout Data Scraper for Advanced and begginers
app.get("/maxed-out-muscle", function (req, res) {

  let result = {};

  request("http://www.muscleandfitness.com/workouts/workout-routines/maxed-out-muscle-workout-back", function (error, response, html) {

    let $ = cheerio.load(html);

    let checkTitle = $(this).find("h3.b-workout-part--title").text().replace(/\s+/g, " ").trim();

    if (checkTitle) {
      result.workoutTitle
    }

    $(".b-workout-part--item").each(function (i, element) {

      result.excersiseType = "Back";
      result.excersiseNo = $(this).children().find(".b-workout-part--exercise-count").text().replace(/\s+/g, " ").trim();
      result.excersise = $(this).children().find(".b-workout-part--promo-title").text().replace(/\s+/g, " ").trim();
      result.sets = $(this).find("div.b-workout-part--instructions--item.workouts-sets").text().replace(/\s+/g, " ").trim();
      result.rep = $(this).find("div.b-workout-part--instructions--item.workouts-reps").text().replace(/\s+/g, " ").trim();
      result.img = $(this).find("span.exercise-thumb").children("img").attr("src");

      let newMaxedOutMuscle = new MaxedOutMuscle(result);

      // Now, save that entry to the db
      newMaxedOutMuscle.save(function (err, doc) {
        // Log any errors
        if (err) {
          console.log(err);
        }
        // Or log the doc
        else {
          console.log(doc);
        }
      });

      console.log("BACK\n\n", result);
    })
  })

  request("http://www.muscleandfitness.com/workouts/workout-routines/maxed-out-muscle-workout-chest", function (error, response, html) {

    let $ = cheerio.load(html);

    // result.workoutTitle = $(this).find(".b-workout-part--title").text().replace(/\s+/g, " ").trim();

    $(".b-workout-part--item").each(function (i, element) {

      result.excersiseType = "Chest";
      result.excersiseNo = $(this).children().find(".b-workout-part--exercise-count").text().replace(/\s+/g, " ").trim();
      result.excersise = $(this).children().find(".b-workout-part--promo-title").text().replace(/\s+/g, " ").trim();
      result.sets = $(this).find("div.b-workout-part--instructions--item.workouts-sets").text().replace(/\s+/g, " ").trim();
      result.rep = $(this).find("div.b-workout-part--instructions--item.workouts-reps").text().replace(/\s+/g, " ").trim();
      result.img = $(this).find("span.exercise-thumb").children("img").attr("src");

      let newMaxedOutMuscle = new MaxedOutMuscle(result);

      // Now, save that entry to the db
      newMaxedOutMuscle.save(function (err, doc) {
        // Log any errors
        if (err) {
          console.log(err);
        }
        // Or log the doc
        else {
          console.log(doc);
        }
      });

      console.log("CHEST\n\n", result);
    })
  })

  request("http://www.muscleandfitness.com/workouts/workout-routines/maxed-out-muscle-workout-shoulders", function (error, response, html) {

    let $ = cheerio.load(html);

    // result.workoutTitle = $(this).find(".b-workout-part--title").text().replace(/\s+/g, " ").trim();

    $(".b-workout-part--item").each(function (i, element) {

      result.excersiseType = "Shoulders";
      result.excersiseNo = $(this).children().find(".b-workout-part--exercise-count").text().replace(/\s+/g, " ").trim();
      result.excersise = $(this).children().find(".b-workout-part--promo-title").text().replace(/\s+/g, " ").trim();
      result.sets = $(this).find("div.b-workout-part--instructions--item.workouts-sets").text().replace(/\s+/g, " ").trim();
      result.rep = $(this).find("div.b-workout-part--instructions--item.workouts-reps").text().replace(/\s+/g, " ").trim();
      result.img = $(this).find("span.exercise-thumb").children("img").attr("src");

      let newMaxedOutMuscle = new MaxedOutMuscle(result);

      // Now, save that entry to the db
      newMaxedOutMuscle.save(function (err, doc) {
        // Log any errors
        if (err) {
          console.log(err);
        }
        // Or log the doc
        else {
          console.log(doc);
        }
      });

      console.log("SHOULDERS\n\n", result);
    })
  })

  request("http://www.muscleandfitness.com/workouts/workout-routines/maxed-out-muscle-workout-biceps", function (error, response, html) {

    let $ = cheerio.load(html);

    // result.workoutTitle = $(this).find(".b-workout-part--title").text().replace(/\s+/g, " ").trim();

    $(".b-workout-part--item").each(function (i, element) {

      result.excersiseType = "Biceps";
      result.excersiseNo = $(this).children().find(".b-workout-part--exercise-count").text().replace(/\s+/g, " ").trim();
      result.excersise = $(this).children().find(".b-workout-part--promo-title").text().replace(/\s+/g, " ").trim();
      result.sets = $(this).find("div.b-workout-part--instructions--item.workouts-sets").text().replace(/\s+/g, " ").trim();
      result.rep = $(this).find("div.b-workout-part--instructions--item.workouts-reps").text().replace(/\s+/g, " ").trim();
      result.img = $(this).find("span.exercise-thumb").children("img").attr("src");

      let newMaxedOutMuscle = new MaxedOutMuscle(result);

      // Now, save that entry to the db
      newMaxedOutMuscle.save(function (err, doc) {
        // Log any errors
        if (err) {
          console.log(err);
        }
        // Or log the doc
        else {
          console.log(doc);
        }
      });

      console.log("BICEPS\n\n", result);
    })
  })

  request("http://www.muscleandfitness.com/workouts/workout-routines/maxed-out-muscle-workout-triceps", function (error, response, html) {

    let $ = cheerio.load(html);

    // result.workoutTitle = $(this).find(".b-workout-part--title").text().replace(/\s+/g, " ").trim();

    $(".b-workout-part--item").each(function (i, element) {

      result.excersiseType = "Triceps";
      result.excersiseNo = $(this).children().find(".b-workout-part--exercise-count").text().replace(/\s+/g, " ").trim();
      result.excersise = $(this).children().find(".b-workout-part--promo-title").text().replace(/\s+/g, " ").trim();
      result.sets = $(this).find("div.b-workout-part--instructions--item.workouts-sets").text().replace(/\s+/g, " ").trim();
      result.rep = $(this).find("div.b-workout-part--instructions--item.workouts-reps").text().replace(/\s+/g, " ").trim();
      result.img = $(this).find("span.exercise-thumb").children("img").attr("src");

      let newMaxedOutMuscle = new MaxedOutMuscle(result);

      // Now, save that entry to the db
      newMaxedOutMuscle.save(function (err, doc) {
        // Log any errors
        if (err) {
          console.log(err);
        }
        // Or log the doc
        else {
          console.log(doc);
        }
      });

      console.log("TRICEPS\n\n", result);
    })
  })

  request("http://www.muscleandfitness.com/workouts/workout-routines/maxed-out-muscle-workout-legs", function (error, response, html) {

    let $ = cheerio.load(html);

    // result.workoutTitle = $(this).find(".b-workout-part--title").text().replace(/\s+/g, " ").trim();

    $(".b-workout-part--item").each(function (i, element) {

      result.excersiseType = "Legs";
      result.excersiseNo = $(this).children().find(".b-workout-part--exercise-count").text().replace(/\s+/g, " ").trim();
      result.excersise = $(this).children().find(".b-workout-part--promo-title").text().replace(/\s+/g, " ").trim();
      result.sets = $(this).find("div.b-workout-part--instructions--item.workouts-sets").text().replace(/\s+/g, " ").trim();
      result.rep = $(this).find("div.b-workout-part--instructions--item.workouts-reps").text().replace(/\s+/g, " ").trim();
      result.img = $(this).find("span.exercise-thumb").children("img").attr("src");

      let newMaxedOutMuscle = new MaxedOutMuscle(result);

      // Now, save that entry to the db
      newMaxedOutMuscle.save(function (err, doc) {
        // Log any errors
        if (err) {
          console.log(err);
        }
        // Or log the doc
        else {
          console.log(doc);
        }
      });

      console.log("LEGS\n\n", result);
    })
  })

  res.redirect("Muscle Redirect Complete");
});

app.get("/back-to-basics", function (req, res) {
  // First, we grab the body of the html with request, ESPN.com/NBA
  request("http://www.mensfitness.com/training/workout-routines/workout-plan-get-back-basics", function (error, response, html) {
    // Then, we load that into cheerio and save it to $ for a shorthand selector
    let $ = cheerio.load(html);
    // Now, we grab every h2 within an article tag, and do the following:
    $(".workout-days__steps.cf").each(function (i, element) {

      // Save an empty result object
      let result = {};

      // let to check not null
      let checkWeek = $(this).parent().prev().find(".workout-day__title").text();
      let checkDay = $(this).prev().find(".workout-day__number").text();

      // Add the text and href of every link, and save them as properties of the result object
      if (checkWeek) {
        result.workoutWeek = checkWeek;
      }

      if (checkDay) {
        result.workoutDay = checkDay;
      }

      result.exercises = $(this).find("p.workout-days__steps__title").text().replace(/\s+/g, " ").trim();
      result.sets = $(element).find(".workout-days__steps__specs").children().first().text().replace(/\s+/g, " ").trim();
      result.reps = $(element).find(".workout-days__steps__specs").children().next().text().replace(/\s+/g, " ").trim();
      result.proTip = $(element).find(".workout-days__steps__description").text();

      // Using our Back to Basics model, create a new entry
      // This effectively passes the result object to the entry (and the title and link)
      let newBasicWorkout = new BackToBasics(result);

      // Now, save that entry to the db
      newBasicWorkout.save(function (err, doc) {
        // Log any errors
        if (err) {
          console.log(err);
        }
        // Or log the doc
        else {
          console.log(doc);
        }
      });

      console.log("Data\n\n", result, "\n");
    });

  });
  res.redirect("Scrape Complete");
});


// Start the server
app.listen(port, function () {
  console.log('Server is running on Port: ', port);
});
