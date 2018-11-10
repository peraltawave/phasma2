// POST ROUTE
// DONE BY MIGUEL PERALTA - this is a try at making a route
// took the code from CAMP REPO 3\15-sequelize\01-Activities\03-Day\12-Blog-CRUD\Solved\routes\html-routes.js
// 5 nov 2018

// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads iFoundaPet.html
  app.get("/iFoundaPet", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/iFoundaPet.html"));
  });

  app.get("/seePets", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/seePets.html"));
  });

  // blog route loads about.html
  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/about.html"));
  });

};