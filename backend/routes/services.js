const express = require('express');

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /listings.
const serviceRoutes = express.Router();

// This will help us connect to the database
const dbo = require('../db/connection');

// This section will help you get a list of all the records.
serviceRoutes.route('/services').get(async function (_req, res) {
  const dbConnect = dbo.getDb();
  let output = {};

  dbConnect
    .collection('service')
    .find({}, {projection:{_id:0}}) 
    .limit(50)
    .toArray(function (err, result) {
      if (err) {
        console.log('Error fetching Service listings!');
        res.status(400).send('Error fetching Service listings!');
      } else {
        console.log('Fetching Service listings!', result);
        output = {
          data : result,
          status: 200,
          message: "Service Collection"
        }

        // output = [
          //record // {
          //   username : result[i].name,
          //   servicesCount : no_Of_services,
          //   rating: rating,
          //   likes: likes
          // },
          // {},
          // {}
        // ];
        

   /*      {
          "employees": [{
            "employee": {
              "name": "sonoo",
              "salary": 56000,
              "married": true
            }
          }],
          "message": "services",
          "status": 200
        } */
        res.send(output);

      }
    });
});

serviceRoutes.route('/services/').post(function (req, res) {

  const dbConnect = dbo.getDb();
  const matchDocument = {
  
    name : req.body.name,
    no_Of_services : req.body.no_Of_services,
};
  dbConnect 
    .collection('service')
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
serviceRoutes.route('/services/update/:likes').post(function (req, res) {
  const dbConnect = dbo.getDb();
  const listingQuery = {  name : req.body.name  };
  const updates = {
    $inc: {
    rating: 20,
    likes : 3,
    },
  };

  dbConnect
    .collection('service')
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
serviceRoutes.route('/services/delete/:name').delete((req, res) => {
  const dbConnect = dbo.getDb();
  const servicesQuery = { name : req.body. name};

  dbConnect
    .collection('service')
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

module.exports = serviceRoutes;