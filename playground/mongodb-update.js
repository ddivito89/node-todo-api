const {MongoClient, ObjectID} = require('mongodb');
// const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err){
    console.log('unable to connect to MongoDB server');
  }else{
  console.log('Connected succesfully to MongoDB');
  }

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('59aafd63ddbd31c2519b0c8a')
  },{
    $set: {
      completed: true
    }
  },{
    returnOriginal: false
  }).then((result) => {
      console.log(result);
  });

  // db.close();
});
