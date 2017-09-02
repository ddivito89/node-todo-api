const {MongoClient, ObjectID} = require('mongodb');
// const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err){
    console.log('unable to connect to MongoDB server');
  }else{
  console.log('Connected succesfully to MongoDB');
  }
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // },(err, result) => {
  //   if(err){
  //     return console.log('unable to insert todo', err)
  //   }else {
  //     console.log(JSON.stringify(result.ops, undefined,2));
  //   }
  // });

  db.collection('Users').insertOne({
    name: 'Zakl',
    age: 27,
    location: 'EG'
  },(err, result) => {
    if(err){
      return console.log('unable to insert user', err)
    }else {
      console.log(JSON.stringify(result.ops, undefined,2));
    }
  });
  db.close();
});
