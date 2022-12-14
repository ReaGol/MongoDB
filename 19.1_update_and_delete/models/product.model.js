import mongoose from "mongoose";
import { productSchema } from "./product.schema.js";

productSchema.statics.printSome = function () {
  console.log({ printSome: this });
};

productSchema.methods.instanceOf = function () {
  console.log({ instanceOf: this });
};

const Product = mongoose.model("products", productSchema);

export { Product };
