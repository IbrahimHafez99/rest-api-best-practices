import { FilterQuery, Query, QueryOptions, UpdateQuery } from "mongoose";
import ProductModel, { ProductDocument } from "../models/product.model";

interface ProductInput {
  user: any;
  title: string;
  description: string;
  price: number;
  image: string;
}


export async function createProduct(input: ProductInput) {
  return ProductModel.create(input)
}
export async function findProduct(query: FilterQuery<ProductDocument>, options: QueryOptions = { lean: true }) {
  return ProductModel.findOne(query, {}, options)
}
export async function deleteProduct(query: FilterQuery<ProductDocument>) {
  return ProductModel.deleteOne(query)
}
export async function updateProduct(query: FilterQuery<ProductDocument>, update: UpdateQuery<ProductDocument>, options: QueryOptions) {
  return ProductModel.findOneAndUpdate(query, update, options)
}