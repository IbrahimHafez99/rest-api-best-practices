import mongoose from "mongoose";
import { customAlphabet } from 'nanoid'
import { UserDocument } from "./user.model";

const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 10)

export interface ProductDocument extends mongoose.Document {
  user: UserDocument["_id"]; // user created the product
  title: string;
  description: string;
  price: number;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
    unique: true,
    default: () => `product_${nanoid()}`
  },
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
})

const ProductModel = mongoose.model("Product", productSchema)

export default ProductModel