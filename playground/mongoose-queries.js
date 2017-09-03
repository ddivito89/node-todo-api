const {ObjectID} = require ('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '59ac2aa63517b077dd931437';

if (!ObjectID.isValid(id)){
  console.log('ID not Valid');
}else{

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

Todo.findById(id).then((todo) => {
  if (!todo){
    return console.log('id not found');
  }
  console.log('Todo by id', todo);
}).catch((e) => console.log(e));
};
