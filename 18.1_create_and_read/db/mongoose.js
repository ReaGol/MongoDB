import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1/argentina", (error, mongoConnection) => {
  if (error) {
    console.log(error);
  }
  if (!process.env.NODE_ENV) {
    const { host, port, name } = mongoConnection;
    console.log({ host, port, name });
  }
});
