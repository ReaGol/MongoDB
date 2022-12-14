import { createProductToMongo } from "../services/users.mongoose.js";

export const getProduct = (req, res) => {
  res.send(product);
};

export const createProduct = async (req, res) => {
  const body = req.body;


  const newProduct = await createProductToMongo(body);
  res.send(newProduct);
};
