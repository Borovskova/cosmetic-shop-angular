

var express = require('express');
var dbAbstractionLayer = require('../public/javascripts/DbAbstractionLayer');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  // setTimeout(() => {

  //   let jsonResponse = {
  //     "handsetCards": [
  //       { imageName: 'makeup1', title: 'By and get 50% sale on all ink "Lancome"', cols: 2, rows: 1 },
  //       { imageName: 'makeup2', title: 'By 2 pomades get 3', cols: 2, rows: 1, },
  //       { imageName: 'makeup3', title: 'Last unit of eyeshadow', cols: 2, rows: 1 },
  //       { imageName: 'makeup4', title: '10% off on all powder', cols: 2, rows: 1 }
  //     ],
  //     "webCards": [
  //       { imageName: 'makeup1', title: 'By and get 50% sale on all ink "Lancome"', cols: 2, rows: 1 },
  //       { imageName: 'makeup2', title: 'Last unit  of eyeshadow', cols: 1, rows: 1 },
  //       { imageName: 'makeup3', title: '10% off on all powder', cols: 1, rows: 2 },
  //       { imageName: 'makeup4', title: '10% off on all powder', cols: 1, rows: 1 }
  //     ]
  //   };
  //   res.json(jsonResponse);
  // }, 3000);

  dbAbstractionLayer.queryDealsCollection()
    .then(response => {
      res.json(response)
    }).catch(error => {
      res.status(500).json({});
    })

});


module.exports = router;
