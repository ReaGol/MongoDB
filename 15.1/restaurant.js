findMyRestaurant >
  db.restaurants.insertMany([
    { name: "Nam" },
    { name: "OCD" },
    { name: "Mashya" },
    { name: "Hudson" },
  ]);
//    '0': ObjectId("6395e35cb610a8289641c8dc"),
//     '1': ObjectId("6395e35cb610a8289641c8dd"),
//     '2': ObjectId("6395e35cb610a8289641c8de"),
//     '3': ObjectId("6395e35cb610a8289641c8df")
findMyRestaurant > db.restaurants.insertOne({ name: "TaiZu" });
// insertedId: ObjectId("6395e3afb610a8289641c8e0")
db.restaurants.deleteOne({ _id: ObjectId("6395e055b610a8289641c8db") });

// Add: a sub-document called to address that includes:
// ● a city
// ● a street
// ● An array of coordinates e.g. [-77,564, 40.677]
// ● a type of cuisine
// ● a boolean if it is Kosher/Halal or not
// ● An array of at least 3 reviews that include:
// ● a date
// ● an integer score
db.teachers.updateOne(
  { _id: ObjectId("5ff6ffa6f91717875a68fc09") },
  { $set: { age: 22 } }
);
db.restaurants.updateOne(
  { name: "Nam" },
  {
    $set: {
      street: "20 jaffa road",
      city: "Tel Aviv",
      coordinates: [232.34, 542.67],
      cuisineType: "Asian",
      kosher: false,
      reviews: [
        { date: "2022-10-01", score: 9 },
        { date: "2022-03-25", score: 8 },
        { date: "2022-05-12", score: 4 },
      ],
    },
  }
);

db.restaurant.find().pretty()
db.restaurants.find({name:"Nam"})

db.restaurants.updateOne(
  { name: "OCD" },
  {
    $set: {
      street: "45 North st",
      city: "Tel Aviv",
      coordinates: [2452.34, 62.67],
      cuisineType: "Israeli",
      kosher: false,
      reviews: [
        { date: "2021-07-07", score: 6 },
        { date: "2022-09-20", score: 9 },
        { date: "2020-03-12", score: 9 },
      ],
    },
  }
);

db.restaurants.updateOne(
  { name: "Mashya" },
  {
    $set: {
      street: "450 yamman rd",
      city: "Jerusalem",
      coordinates: [82.34, 52.67],
      cuisineType: "Israeli",
      kosher: true,
      reviews: [
        { date: "2022-10-01", score: 7 },
        { date: "2022-03-25", score: 8 },
        { date: "2022-05-12", score: 7 },
      ],
    },
  }
);

db.restaurants.updateOne(
  { name: "Hudson" },
  {
    $set: {
      street: "david ave. 30",
      city: "Tel Aviv",
      coordinates: [232.34, 542.67],
      cuisineType: "American",
      kosher: false,
      reviews: [
        { date: "2022-10-01", score: 6 },
        { date: "2022-03-25", score: 5 },
        { date: "2022-05-12", score: 4 },
      ],
    },
  }
);

db.restaurants.updateOne(
  { name: "Taizu" },
  {
    $set: {
      street: "200 epic road",
      city: "Haifa",
      coordinates: [332.34, 542.67],
      cuisineType: "Asian",
      kosher: false,
      reviews: [
        { date: "2012-10-01", score: 8 },
        { date: "2022-03-17", score: 8 },
        { date: "2022-07-10", score: 7 },
      ],
    },
  }
);