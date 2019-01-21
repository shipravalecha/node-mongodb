//const MongoClient = require('mongodb').MongoClient;
// object destruction means object property is turned to field name
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://ds163044.mlab.com:63044/todoapp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('connected to mongodb server');

//deleteMany
// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
//   console.log(result);
// });

//deleteOne
// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
//    console.log(result);
// });

// findoneanddelete
// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
//    console.log(result);
// });

db.collection('Users').deleteMany({name: 'shipra'}).then((result) => {
  console.log(result);
});

db.collection('Users').findOneAndDelete({_id: new ObjectId('')}).then((result) => {
  console.log(result);
});
//  db.close();

});
