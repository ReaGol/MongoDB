import { MongoClient, ObjectId } from "mongodb";

const connectionURL = "mongodb://127.0.0.1:27017";
const dbName = "blog";

const client = new MongoClient(connectionURL);

async function main() {
 
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const users = db.collection("users");
  const posts = db.collection("posts");
  const comments = db.collection("comments");

  const insertUsers = await users.insertMany([
    {
      name: "moshe haim",
      age: 27,
      email: "moshe@gmail.com",
      posts: [],
    },
    {
      name: "haim moshe",
      age: 22,
      email: "haim22@gmail.com",
      posts: [],
    },
  ]);

  const insertPosts = await posts.insertMany([
    {
      title: "check this out",
      text: "The new game I built",
      comments: [],
    },
    {
      title: "can someone help with this?",
      text: "I have trouble finding info about this issue",
      comments: [],
    },
  ]);

  await users.updateOne(
    { _id: ObjectId(insertUsers.insertedIds["1"]) },
    {
      $set: {
        posts: [insertPosts.insertedIds["0"], insertPosts.insertedIds["1"]],
      },
    }
  );

  const { insertedIds } = await comments.insertMany([
    {
      text: "nice one dude",
    },
    {
      text: "cool stuff",
    },
  ]);
  await posts.updateOne(
    { _id: ObjectId(insertPosts.insertedIds["0"]) },
    {
      $set: {
        comments: [insertedIds["0"], insertedIds["1"]],
      },
    }
  );
}
main();
