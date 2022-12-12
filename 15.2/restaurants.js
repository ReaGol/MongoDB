

  // 1.   Crud
  // 1.1 – Write a MongoDB query to display all the documents in the
  // restaurant collection.
  findMyRestaurant >
  db.restaurants.find();
// 1.2 - Write a MongoDB query to display all restaurants that have a
// specific cuisine
findMyRestaurant > db.restaurants.find({ cuisineType: "Asian" });
// 1.3 - Write a MongoDb query that displays only kosher
// restaurants
findMyRestaurant > db.restaurants.find({ kosher: true });
// 1.4 - Write a MongoDb query that displays only specific cities
// restaurants
db.restaurants.find({ city: "Jerusalem" });
// 1.5 - Write a MongoDb query to display a specific restaurants
// address
db.restaurants.find({ name: "OCD" }, { street: 1 });
// 1.6 - Write a MongoDB query to display specific restaurants
// coordinates
db.restaurants.find({ name: "OCD" }, { coordinates: 1 });
// 1.7. - Write a MongoDB query that should display all restaurants in
// ascending order by restaurant name.
db.restaurants.find().sort({ name: 1 });
// 1.8 - Write a MongoDB query that should display all restaurants in
// ascending order by city names.
db.restaurants.find().sort({ city: 1 });
// 1.9 - Update a specific restaurant's name
db.restaurants.findOneAndUpdate(
  { name: "Shmudson" },
  { $set: { name: "Hudson" } }
);
// 1.10 - Update a specific restaurant by adding a new review.

  db.restaurants.findOneAndUpdate(
    { name: "Nam" },
    {
      $push: {
        reviews: {
          date: '2022-03-21',
          score: 10,
        },
      },
    }
  );
// 1.11 - Update all restaurants to be kosher
db.restaurants.updateMany({}, {$set: {kosher: true}});
// 1.12 - Delete a specific restaurant
db.restaurants.deleteOne({ name: "TaiZu" });
// 1.13 - Delete all restaurants
db.restaurants.deleteMany({});
// 2. forEach Queries
// use the forEach cursor method to query the following:
// 2.1 - Write a MongoDB query to print all restaurant names.
db.restaurants
  .find()
  .forEach((restaurant) => printjson(`restaurant name is ${restaurant.name}`));  
// 2.2 - Write a MongoDB query to print all restaurant cities
db.restaurants
  .find()
  .forEach((restaurant) =>
    printjson(`${restaurant.name} restaurant is in ${restaurant.city}`)
  );
// 2.3 - Write a MongoDb query to print all restaurant coordinates
db.restaurants
  .find()
  .forEach((restaurant) =>
    printjson(`restaurant coordinates are ${restaurant.coordinates}`)
  );
// 3. Advanced Queries
// 3.1 - Query for restaurant names that start with a specific
// alphabet
db.restaurants.find({ name: { $regex: /^M/ } });
// 3.2 - Query how many documents you have from the restaurant
// collection.
db.restaurants.countDocuments();
// 3.3 - Write a MongoDb query to get restaurants that include
// reviews from a specific date.
db.restaurants.find({ reviews: {$elemMatch: {date: "2022-03-25" }}});
// 4. Aggregation operations
// use the aggregation framework to query the following:
// 4.1- Write a mongoDb query to display all restaurants average
// score.

  db.restaurants.aggregate([
    {
      $unwind: "$reviews",
    },
    {
      $group: {
        _id: "$name",
        averageScore: { $avg: "$reviews.score" },
      },
    },
  ]);
// 4.2 - Write a MongoDB query to display a specific restaurant
// average score

db.restaurants.aggregate([
         {
             $match: {
                 name: "Nam"
             }
         },
         {
             $unwind: "$reviews"
         },
         {
             $group: {
                 _id: "$name",
                 averageScore: { $avg: "$reviews.score" }
             }
         }
     ])
