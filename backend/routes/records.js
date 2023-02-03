const express = require('express');

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /listings.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require('../db/connection');

// This section will help you get a list of all the records.
recordRoutes.route('/reviews').get(async function (_req, res) {
  const dbConnect = dbo.getDb();

  dbConnect
    .collection('review')
    .find({}) 
    .limit(50)
    .toArray(function (err, result) {
      if (err) {
        console.log('Error fetching Service listings!');
        res.status(400).send('Error fetching Service listings!');
      } else {
        console.log('fetching Service listings!', result);
        res.json(result);
      }
    });
});
recordRoutes.route('/reviews/').post(function (req, res) {

  const dbConnect = dbo.getDb();
  const matchDocument = {
  
    feedback : req.body.feedback,
    comment : req.body.comment,
    rating : req.body.rating,
};
  dbConnect 
    .collection('review')
    .insertOne(matchDocument, function (err, result) {
      if (err) {
        console.log("Error..", res)
        res.status(400).send('Error inserting matches!');
      } else {
        console.log(`Added a new match with id ${result.insertedId}`);
        res.status(204).send();
      }
    });
}); 
// This section will help you create a new record.
// recordRoutes.route('/listings/recordSwipe').post(function (req, res) {
//   const dbConnect = dbo.getDb();
//   const matchDocument = {
//     listing_id: req.body.id,
//     last_modified: new Date(),
//     session_id: req.body.session_id,
//     direction: req.body.direction,
//   };

//   dbConnect
//     .collection('matches')
//     .insertOne(matchDocument, function (err, result) {
//       if (err) {
//         res.status(400).send('Error inserting matches!');
//       } else {
//         console.log(`Added a new match with id ${result.insertedId}`);
//         res.status(204).send();
//       }
//     });
 // });

// // This section will help you update a record by id.
recordRoutes.route('/reviews/update/:rating').post(function (req, res) {
  const dbConnect = dbo.getDb();
  const listingQuery = {  feedback : req.body.feedback  };
  const updates = {
    $inc: {
    rating : 10,
    },
  };

  dbConnect
    .collection('review')
    .updateOne(listingQuery, updates, function (err, _result) {
      if (err) {
        res
          .status(400)
          .send(`Error updating likes on listing with id ${listingQuery.id}!`);
      } else {
        console.log('1 document updated');
        res.status(204).send();
      }
    });
});

// // This section will help you delete a record.
recordRoutes.route('/reviews/delete/:rating').delete((req, res) => {
  const dbConnect = dbo.getDb();
  const servicesQuery = { rating : req.body. rating};

  dbConnect
    .collection('review')
    .deleteOne(servicesQuery, function (err, _result) {
      if (err) {
        res
          .status(400)
          .send(`Error deleting listing with id ${servicesQuery.services_id}!`);
      } else {
        console.log('1 document deleted');
        res.status(204).send();
      }
    });
});  

module.exports = recordRoutes;