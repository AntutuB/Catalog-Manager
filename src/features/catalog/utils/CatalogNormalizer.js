class CatalogNormalizer {


    normalize(catalog = []){


        const products = [];



        /*
            Caso 1:
            Ya viene como array plano
        */

        if(Array.isArray(catalog)){


            return catalog.map(product => ({


                id:
                    product.id,


                brand:
                    product.brand,


                name:
                    product.name,


                type:
                    product.type || "Otros",


                typeDescription:
                    product.typeDescription ||
                    product.type_description ||
                    "",


                sku:
                    product.sku || "",


                price:
                    product.price || 0,


                currency:
                    product.currency ||
                    product.currency_symbol ||
                    "$",


                imageUrl:
                    product.imageUrl ||
                    product.image_url ||
                    null


            }));

        }





        /*
            Caso 2:
            Estructura completa de catálogo
        */


        if(!catalog.categories){

            return products;

        }



        catalog.categories.forEach(category=>{


            if(!category.products){

                return;

            }



            category.products.forEach(product=>{


                products.push({


                    id:
                        product.id,


                    brand:
                        product.brand,


                    name:
                        product.name,


                    type:
                        category.name,


                    typeDescription:
                        product.type_description || "",


                    sku:
                        product.sku || "",


                    price:
                        product.price || 0,


                    currency:
                        product.currency_symbol || "$",


                    imageUrl:
                        product.image_url || null


                });


            });


        });



        return products;


    }


}


export default new CatalogNormalizer();