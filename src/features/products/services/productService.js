import { db } from "../../../database/db";


export async function getProducts(){

  return await db.products.toArray();

}



export async function createProduct(product){

  return await db.products.add(product);

}



export async function updateProduct(id, data){

  return await db.products.update(id, data);

}



export async function deleteProduct(id){

  return await db.products.delete(id);

}