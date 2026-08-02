import { db } from "../../../database/db";


export async function getOthersServices(){

    return await db.othersServices.toArray();

}



export async function createOthersService(data){

    return await db.othersServices.add(data);

}



export async function updateOthersService(id,data){

    return await db.othersServices.update(id,data);

}



export async function deleteOthersService(id){

    return await db.othersServices.delete(id);

}