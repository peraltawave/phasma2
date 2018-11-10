// ***********************************************
// apiRoutes.js - this file offers a set of 
// routes for displaying and saving data to the db
//
// source: 
// 15-sequelize\01-Activities\03-Day\13-Post-Author-
// Association\Solved\routes\post-api-routes.js
//
// also looking at 
// 15-sequelize\01-Activities\03-Day\12-Blog-CRUD\
// Solved\routes\api-routes.js
// ***********************************************
// REAL CODE BY JOSH

var db = require("../models");
module.exports = function (app) {
  app.post("/iFoundAPet", function (req, res) {
    var body = req.body;
    console.log(body);
    //create post in DB then redirect user to Post page
    db.petfinder_data
      .create({
        animalSpecies: body.animalSpecies,
        animalGenderMale: body.animalGenderMale,
        animalFeatures: body.animalFeatures,
        animalPic: body.animalPic,
        foundStreet1: body.foundStreet1,
        foundStreet2: body.foundStreet2,
        personName: body.personName,
        personEmail: body.personEmail
      })
      .then(function (data) {
        // res.json(dbPetFinder);
        console.log("data", data);
        res.redirect("/post/" + data.dataValues.id);
      });
  });
  app.delete("/post/:id", function (req, res) {
    console.log("DELETING FORM " + req.params.id);
    db.petfinder_data
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function (data) {
        return res.json(data);
        // res.redirect("/");
      });
  });


  /////begin upload function
  app.post('/upload', function (req, res) {
    if (Object.keys(req.files).length == 0) {
      return res.status(400).send('No files were uploaded.');
    }

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let sampleFile = req.files.sampleFile;


    let pathString = '/Users/benCarson/Desktop/CodingCamp/phasma/public/pictures/' + sampleFile.name;
    console.log(pathString);
    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv(pathString, function (err) {
      if (err)
        return res.status(500).send(err);

      db.Picture.insert
      res.send('File uploaded!');
    });
  });
  /////end of upload function
};