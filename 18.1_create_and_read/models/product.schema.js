import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, price: Number },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  isActive: Boolean,
  details: {
    description: {
      type: String,
      required: true,
      minLength: 10,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      validate(value) {
        if (value < 0) {
          throw new Error("must be a positive number");
        }
      },
    },
    discount: {
      type: Number,
      default: 0,
    },
  },
});

export { productSchema };


