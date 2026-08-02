import Dexie from "dexie";


export const db = new Dexie("CatalogManagerDB");


db.version(3).stores({

  products:
    "++id, name, brand, categoryId, type, price, createdAt",


  categories:
    "++id, name, description",


  othersServices:
    "++id, name, price, createdAt",


  templates:
    "++id, name",


  settings:
    "++id"

});