// collection is table, document is record, field is column
// insertOne is used to insert doc into collection
// mongodb://<dbuser>:<dbpassword>@ds163054.mlab.com:63054/mongod
//mongodb://localhost:27017/TodoApp

//const MongoClient = require('mongodb').MongoClient;
// object destruction means object property is turned to field name
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://ds163044.mlab.com:63044/todoapp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('connected to mongodb server');

  // db.collection('Todos').insertOne({
  //   text: 'something',
  //   completed: true
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('error occured', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  //
  // db.collection('Users').insertOne({
  //   name: 'shipra',
  //   age: 28,
  //   location: 'India'
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('unable to insert', err);
  //   }
  //   console.log(result.ops[0].getTimestamp());
  // });

  db.close();

});
