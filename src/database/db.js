import Dexie from "dexie";


export const db = new Dexie("CatalogManagerDB");


db.version(1).stores({

  products:
    "++id, name, brand, categoryId, type, price",

  categories:
    "++id, name",

  templates:
    "++id, name",

  settings:
    "++id"

});