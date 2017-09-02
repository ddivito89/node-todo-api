const {MongoClient, ObjectIO} = require('mongodb');
// const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err){
    console.log('unable to connect to MongoDB server');
  }else{
  console.log('Connected succesfully to MongoDB');
  }

  // db.collection('Todos').find({completed:false}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // },(err) => {
  //   console.log('unable to fetch data', err);
  // });

  db.collection('Todos').find().count().then((count) => {
    console.log('Todos count:'+count);
  },(err) => {
    console.log('unable to fetch data', err);
  });

  // db.close();
});
