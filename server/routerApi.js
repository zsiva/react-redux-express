const express = require('express');

const DATA = require('./dummyData');

const router = express.Router({
  strict: true,
  caseSensitive: true
});

router.get('/getQuestions', ((req, res) => {
  //Fake request
  res.json(DATA)
}));
// handle every other
 //router.get('/cities/:name', CityController.read);


router.all('*', (req, res, next) => {
  res.status(404).json(jsonError());
})

module.exports = router;
