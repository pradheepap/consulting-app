const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5050;

const dbo = require('./db/connection');


const routes = require('./routes/records');

app.use(express.json());
app.use(cors());
require('dotenv').config(); 
app.use(routes);


app.get('/', (req, res) => {
	console.log("hellooo working")
	res.send('welcome to consulting services!')
	
})

// Global error handling
app.use(function (err, _req, res) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
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