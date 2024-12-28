"use server";
import { revalidatePath } from "next/cache";

import User from "@/models/user";
import connectToDb from "@/utils/dbConnect";
import { handleError } from "../utils";

// CREATE
export async function createUser(user) {
  try {
    await connectToDb();

    const newUser = await User.create(user);

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
}

// READ
export async function getUserById(userId) {
  try {
    await connectToDb();

    const user = await User.findOne({ clerkId: userId });

    if (!user) throw new Error("User not found");

    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    handleError(error);
  }
}

// UPDATE
export async function updateUser(clerkId, user) {
  try {
    await connectToDb();

    const updatedUser = await User.findOneAndUpdate({ clerkId }, user, {
      new: true,
    });

    if (!updatedUser) throw new Error("User update failed");

    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
  }
}

// DELETE
export async function deleteUser(clerkId) {
  try {
    await connectToDb();

    // Find user to delete
    const userToDelete = await User.findOne({ clerkId });

    if (!userToDelete) {
      throw new Error("User not found");
    }

    // Delete user
    const deletedUser = await User.findByIdAndDelete(userToDelete._id);
    revalidatePath("/");

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
  } catch (error) {
    handleError(error);
  }
}

export async function getUserRole(clerkId) {
  try {
    await connectToDb()
    const user = await User.findOne({clerkId});
    if (!user) {
      return null; 
    }
    return user.role;
  } catch (error) {
    handleError(error)
  }
}

export async function getUserCount() {
  try {
    await connectToDb()
    const count = await User.countDocuments();
    return count;
  } catch (error) {
    console.error("Error fetching user count:", error);
    return null; 
  }
}