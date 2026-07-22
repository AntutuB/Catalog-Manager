import { db } from "../../../database/db";


export async function getTemplates(){

  return await db.templates.toArray();

}


export async function createTemplate(template){

  return await db.templates.add(template);

}


export async function updateTemplate(id,data){

  return await db.templates.update(id,data);

}


export async function deleteTemplate(id){

  return await db.templates.delete(id);

}