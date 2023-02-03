const express = require('express');
const ObjectId = require('mongodb').ObjectId;

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /listings.
const orderRoutes = express.Router();

// This will help us connect to the database
const dbo = require('../db/connection');

// This section will help you get a list of all the records.
orderRoutes.route('/orders').get(async function (_req, res) {
  const dbConnect = dbo.getDb();

  dbConnect
    .collection('order')
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
orderRoutes.route('/orders/').post(function (req, res) {

  const dbConnect = dbo.getDb();
  const matchDocument = {
  
    orderName : req.body.orderName,
    addingCarts : req.body.addingCarts,
    quantity : req.body.quantity,
};
  dbConnect 
    .collection('order')
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


// // This section will help you update a record by id.
orderRoutes.route('/orders/update/:orderName').post(function (req, res) {
  const dbConnect = dbo.getDb();
  const listingQuery = {  orderName : req.body.orderName  };
  const updates = {
    $inc: {
        quantity : 2,
    },
  };

  dbConnect
    .collection('order')
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
orderRoutes.route('/orders/delete/:_id').delete((req, res) => {
  const dbConnect = dbo.getDb();
  const servicesQuery = {_id: ObjectId(req.body.id)};

  dbConnect
    .collection('order')
    .deleteOne(servicesQuery, function (err, _result) {
      if (err) {
        console.log("error", res)
        res
          .status(400)
          .send(`Error deleting listing with id ${servicesQuery.services_id}!`);
      } else {
        console.log('1 document deleted');
        res.status(204).send();
      }
    });
});  

module.exports = orderRoutes;