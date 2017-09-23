/* Showing Mongoose's "Populated" Method
 * =============================================== */

// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Requiring our Exercise model
var Exercises = require("../models/Exercises");

// Our scraping tools
var request = require("request");
var cheerio = require("cheerio");

// Initialize Express
var app = express();

// Routes
// =============================

app.get("/scrape", (req, res) => {
    console.log("Scrape Request");
    request("https://www.bodybuilding.com/fun/dorian-yates-blood-guts-1.htm", (err, response, html) => {
        let $ = cheerio.load(html);

        $("#DPG").each((i, element) => {
            let result = {};

            result.workoutType = $(this).children("#dpg-plan-table").children(".dpg-workout-header-blue").text();

            console.log("Scrape Data", result);
        })
    })
    res.redirect("Scrape Complete");
});

// A GET request to scrape the echojs website
// app.get("/scrape", function (req, res) {
//   // First, we grab the body of the html with request, ESPN.com/NBA
//   request("http://www.espn.com/nba", function (error, response, html) {
//     // Then, we load that into cheerio and save it to $ for a shorthand selector
//     var $ = cheerio.load(html);
//     // Now, we grab every h2 within an article tag, and do the following:
//     $(".contentItem__padding").each(function (i, element) {

//       // Save an empty result object
//       var result = {};

//       // Add the text and href of every link, and save them as properties of the result object
//       result.title = $(this).children("div").children("h1").text();
//       result.description = $(this).children("div").children("p").text();
//       result.link = $(this).attr("href");
//       result.img = $(this).children("figure").children("picture").children("img").attr("data-default-src");
//       result.sport = "NBA";

//       // Using our Article model, create a new entry
//       // This effectively passes the result object to the entry (and the title and link)
//       var newArticle = new Article(result);

//       // Now, save that entry to the db
//       newArticle.save(function (err, doc) {
//         // Log any errors
//         if (err) {
//           console.log(err);
//         }
//         // Or log the doc
//         else {
//           console.log(doc);
//         }
//       });

//       console.log("NATIONAL BASKETBALL ASSOTIATION\n\n", result);
//     });

//   });
//   res.redirect("Scrape Complete");
// });
