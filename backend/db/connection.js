const { MongoClient } = require('mongodb');
const dotenv = require("dotenv");
dotenv.config();

const mongodbUserName = process.env.MONGO_USER_NAME;
const mongodbPassword = process.env.MONGO_PASSWORD;
const connectionString=`mongodb+srv://${mongodbUserName}:${mongodbPassword}@cluster0.8pu2z.mongodb.net/consulting-app?retryWrites=true&w=majority`;

console.log(`${mongodbUserName} - ${mongodbPassword} - ${connectionString}`)
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (err || !db) {
        return callback(err);
      }

      dbConnection = db.db('consulting-app');
      console.log('Successfully connected to MongoDB.');

      return callback();
    });
  },

  getDb: function () {
    return dbConnection;
  },
};