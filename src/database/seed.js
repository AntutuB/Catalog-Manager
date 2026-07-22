import { db } from "./db";


export async function seedDatabase(){

  const categoriesCount =
    await db.categories.count();


  if(categoriesCount === 0){

    await db.categories.bulkAdd([
      {
        name:"Gafas de sol"
      },
      {
        name:"Monturas"
      },
      {
        name:"Lectura"
      }
    ]);

  }

}