"use server";

import Products from "@/models/products";
import connectToDb from "@/utils/dbConnect";
import { handleError } from "../utils";

export async function getProductsCount() {
    try {
      await connectToDb()
      const count = await Products.countDocuments();
      return count;
    } catch (error) {
      handleError(error);
    }
  }