import { MongoClient } from "mongodb";

const connectionURL = "mongodb://127.0.0.1:27017";
const dbName = "blog";

const client = new MongoClient(connectionURL);
const db = client.db(dbName);

// User {
//
//   "name" : "Moshe Haim",
//   "age" : 27,
//   "email": moshe@gmail.com
//   "posts": ["idA", "idB", "idC"]
// }

// Post {
//
//   "title" : "Hello World",
//   "text" : 'My first post',

//   "comments" : [
//    "ObjectID('AAAA')", "ObjectID('BBBB')", "ObjectID('CCCC')"
//   ]
// }

// Comment

//   { 
//    text : 'blah'
//   }
//  { 
//    text : 'duh'
//  }
