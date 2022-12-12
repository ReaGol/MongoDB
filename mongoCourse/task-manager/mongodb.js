// const mongodb = require('mongodb')
import mongodb from "mongodb";
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectID()
// console.log(id);
// console.log(id.getTimestamp());

MongoClient.connect(
  connectionURL,
  { useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("unable to connect to database");
    }
    // console.log("connected correctly");
    const db = client.db(databaseName);

    // db.collection("users").insertOne({
    //   _id: id,
    //   name: "Vikram",
    //   age: 26,
    // }, (error, result) => {
    //   if (error) {
    //     return console.log('unable to insert user');
    //   }

    //   console.log(result.ops);
    // });
    // db.collection('users').insertMany([
    //   {
    //     name: 'Jen',
    //     age: 28
    //   }, {
    //     name: 'Gunther',
    //     age:27
    //   }
    // ], (error, result) => {
    //   if (error) {
    //     return console.log('unable to insert documents');
    //   }
    //   console.log(result.ops);
    // })

    // db.collection('tasks').insertMany([
    //   {
    //     desc: 'walk dog',
    //     completed: true
    //   }, {
    //     desc: 'wash dishes',
    //     completed: true
    //   }, {
    //     desc: 'workout and drink protein shake',
    //     completed: false
    //   }
    // ], (error, result) => {
    //   if (error) {
    //     return console.log("unable to insert documents");
    //   }
    //   console.log(result.ops);
    // })

  db.collection('tasks').findOne({ _id: new ObjectID("6397025a335fd36a4cee3132")}, (error, task)=>{
    console.log(task);
  })

    db.collection("tasks").find({ completed: true }).toArray((error, tasks) => {
      console.log(tasks);
      });

  }
);
