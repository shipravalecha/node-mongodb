//mongoose is much more organized than mongodb
//mongodb can have different docs in the same collection whereas mongoose store in organized way and first create model
//mongoose use a specific library of promises via statement: mongoose.Promise = global.Promise;
// add validators to different fields like in text

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://ds163044.mlab.com:63044/Todoapp');

// create model
var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
      type: Number,
      default: null
  }
});

// add new todo to be inserted in db
// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// // save it to db
// newTodo.save().then((doc) => {
//   console.log('saved todo', doc);
// }, (err) => {
//   console.log('failed to save todo');
// });

// var otherTodo = new Todo({
//   text: 'play football',
//   completed: true,
//   completedAt: 1602
// });
//
// otherTodo.save().then((doc) => {
//   console.log('saved todo', doc);
// }, (err) => {
//   console.log('failed to save todo');
// });


// 2nd model Users
var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

var newUser = new User({
email: 'shipravalecha92@gmail.com'
});

newUser.save().then((user) => {
  console.log('User saved', user);
}, (err) => {
  console.log('error while saving');
});
