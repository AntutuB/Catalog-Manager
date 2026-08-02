import Dexie from "dexie";


export const db = new Dexie("CatalogManagerDB");


db.version(2).stores({

  products:
    "++id, name, brand, categoryId, type, price, createdAt",

  categories:
    "++id, name, description",

  templates:
    "++id, name",

  settings:
    "++id"

});