//const MongoClient = require('mongodb').MongoClient;
// object destruction means object property is turned to field name
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://ds163044.mlab.com:63044/todoapp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('connected to mongodb server');

// to find doc on teh basis of object_id
  // db.collection('Todos').find({_id: new ObjectId('')}).toArray().then((docs) => {
  //   console.log('todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('unable to fetch todos', err);
  // });

// to find the count of docs in collection
  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`todos count: ${count}`);
  // }, (err) => {
  //   console.log('unable to fetch todos', err);
  // });

// to get docs on basis of condition name:  shipra
  db.collection('Users').find({name: 'shipra'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('unable to find', err);
  });

//  db.close();

});
