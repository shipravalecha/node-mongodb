//const MongoClient = require('mongodb').MongoClient;
// object destruction means object property is turned to field name
const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://ds163044.mlab.com:63044/todoapp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to Mongodb server');
  }
  console.log('connected to mongodb server');
// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectId('')
// },
// {
//   $set: {
//      text: ''
//    }
//  },
//  {
//    returnOriginal: false
//  }).then((res) => {
//   console.log(res);
// });


db.collection('Users').findOneAndUpdate(
  {
  _.id: new ObjectId('')
}, {
  $set: {
    name: 'abhishek'
  }
},
  {
    returnOriginal: false
  },
  {
    $inc: {
      age: -1
    }
  }).then((res) => {
    console.log(res);
  });
//  db.close();

});
