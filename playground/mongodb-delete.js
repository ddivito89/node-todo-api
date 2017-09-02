const {MongoClient, ObjectID} = require('mongodb');
// const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err){
    console.log('unable to connect to MongoDB server');
  }else{
  console.log('Connected succesfully to MongoDB');
  }

  // //delete many
  // db.collection('Todos').deleteMany({text: 'workout'}).then((result) => {
  //   console.log(result);
  // });

  // //deleteOne
  // db.collection('Todos').deleteOne({text: 'workout'}).then((result) => {
  //     console.log(result);
  //   });

  // // findOneAndDelete
  db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    console.log(result);
  });

  // db.close();
});
