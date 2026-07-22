import { db } from "../../../database/db";


export async function getCategories(){

  return await db.categories.toArray();

}


export async function createCategory(category){

  return await db.categories.add(category);

}


export async function updateCategory(id, data){

  return await db.categories.update(id, data);

}


export async function deleteCategory(id){

  return await db.categories.delete(id);

}