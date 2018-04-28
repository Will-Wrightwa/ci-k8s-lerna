

const Hapi = require('hapi');
const mongoose = require('mongoose');
const random = require('./src/controllers/random');


const server = new Hapi.Server({
  port: 3000,
  host: 'localhost',
});

server.route({
  method: 'GET',
  path: '/',
  handler: random,
});


(async () => {
  try {
    await server.start();
    // Once started, connect to Mongo through Mongoose
    mongoose.connect(MongoDBUrl, {}).then(() => { console.log('Connected to Mongo server'); }, (err) => { console.log(err); });
    console.log(`Server running at: ${server.info.uri}`);
  } catch (err) {
    console.log(err);
  }
})();
