"use server";

import Article from "@/models/article";
import connectToDb from "@/utils/dbConnect";
import { handleError } from "../utils";

export async function getArticlesCount() {
    try {
      await connectToDb()
      const count = await Article.countDocuments();
      return count;
    } catch (error) {
      handleError(error);
    }
  }