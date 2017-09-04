const {ObjectID} = require ('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
//
// Todo.remove({}).then((result) =>{
//   console.log(result);
// })

//Todo.findOneAndRemove

Todo.findByIdAndRemove('59ad7599bc51a8e818ab3554').then((todo) => {
    console.log(todo);
})
