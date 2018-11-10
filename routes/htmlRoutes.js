/////////
///////// HTML ROUTES
/////////
/////////

var db = require("../models");

///////// REAL CODE

module.exports = function (app) {
  ///////// Each of the below routes just handles the HTML page that the user gets sent to.
  ///////// Route for Home Page
  app.get("/", function (req, res) {
    res.render("index");
  });

  ///////// index route loads iFoundaPet.html
  app.get("/iFoundAPet", function (req, res) {
    res.render("iFoundAPet-form");
  });

  ///////// below is the picture upload code


  ///////// Load example page and pass in an example by id
  app.get("/picture/:id", function (req, res) {
    db.Picture.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbExample) {
      res.render("picture", {
        example: dbExample
      });
    });
  });

  ///////// Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });


  ///////// end of picture function

  ///////// route for "post deleted" page
  app.get("/postDeleted", function (req, res) {
    res.render("postDeleted");
  });

  ///////// Route for viewing a single post
  app.get("/post/:id", function (req, res) {
    var id = req.params.id;

    db.petfinder_data
      .findOne({
        where: {
          id: id
        }
      })
      .then(function (post) {
        console.log("post", post);
        res.render("post", {
          post: post
        });
      });
  });

  ///////// Route for page to search pets
  app.get("/petSearch", function (req, res) {
    db.petfinder_data.findAll({}).then(function (response) {
      console.log(response);
      return res.render("petSearch", {
        allPosts: response
      });
    });
  });

  ///////// blog route loads about.html
  app.get("/about", function (req, res) {
    res.render("about");
  });
};