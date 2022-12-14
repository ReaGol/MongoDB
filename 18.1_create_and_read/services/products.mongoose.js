import { Product } from "../models/product.model.js";

export const addProductToMongo = async (ProductObj) => {
  //   const newProduct = new Product(ProductObj); // sync
  //   newProduct.save(); //async
  // Product.printSome();
  const newProduct = await Product.create(ProductObj);
  newProduct.instanceOf();
  return newProduct;
}; 
