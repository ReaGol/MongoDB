import { Router } from "express";
import { getProduct, createProduct } from "../controllers/products.controller.js";
import { productAuth } from "../middlewares/auth.middleware.js";
export const indexRoute = Router();

indexRoute.get("/index", getProduct);
indexRoute.post("/createProduct", productAuth, createProduct);
