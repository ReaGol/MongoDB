import {connect, model, set, Schema} from "mongoose";
import validator from "validator";
set("strictQuery", true);
connect("mongodb://127.0.0.1:27017/products-api", () => {
   console.log("connected to server...");
});

const productSchema = new Schema({
   name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
   },
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
      images: {
         type: [String],
         minLength: 2,
         validate(value) {
            if (!value.every((element) => validator.isURL(element))) {
               throw new Error("must be valid url links");
            }
         },
      },
      phoneNumber: {
         type: String,
         required: true,
         validate(value) {
            if (!validator.isMobilePhone(value, ["he-IL"])) {
               throw new Error("must be a valid israeli number");
            }
         },
      },
      dateAdded: {type: Date, default: Date.now},
   },
});
const Product = model("Product", productSchema);

const shirt = new Product({
   name: "cool shirt",
   category: "t-shirts",
   isActive: true,
   details: {
      description: "the coolest shirt in the world",
      price: 100,
      discount: 10,
      images: [
         "https://images.unsplash.com/photo-1585115704784-d6dc0bf699bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
         "https://images.unsplash.com/photo-1585115704784-d6dc0bf699bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=81",
      ],
      phoneNumber: "+972528557830",
   },
});

const pants = new Product({
   name: "cool pants",
   category: "pantsssss",
   isActive: false,
   details: {
      description: "the coolest pants in the world",
      price: 10,
      discount: 1,
      images: [
         "https://images.unsplash.com/photo-1585115704784-d6dc0bf699bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
         "https://images.unsplash.com/photo-1585115704784-d6dc0bf699bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=81",
      ],
      phoneNumber: "+972528557740",
   },
});

const boxer = new Product({
   name: "cool boxer",
   category: "boxer",
   isActive: true,
   details: {
      description: "the coolest boxer in the world",
      price: 100,
      discount: 5,
      images: [
         "https://images.unsplash.com/photo-1585115704784-d6dc0bf699bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
         "https://images.unsplash.com/photo-1585115704784-d6dc0bf699bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=81",
      ],
      phoneNumber: "+972528557850",
   },
});

