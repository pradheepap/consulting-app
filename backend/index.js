const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5050;

const dbo = require('./db/connection');


const reviews = require('./routes/reviews');
const services = require('./routes/services');
const orders = require('./routes/orders');

app.use(express.json());
app.use(cors());
require('dotenv').config(); 
app.use(reviews);
app.use(services);
app.use(orders);

app.get('/', (req, res) => {
	console.log("hellooo working")
	res.send({
        message : "Success"
    })
	
})

// Global error handling
app.use(function (err, _req, res, next) {
    console.error(err.stack);
    //res.status(500).send('Something broke!');
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode)
    res.json({
        message : err.message,
        stack :process.env.NODE_ENV === 'production' ? null : err.stack, 
    })
});


// perform a database connection when the server starts
dbo.connectToServer(function (err) {
    if (err) {
      console.error(err);
      process.exit();
    }
  
    // start the Express server
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
});