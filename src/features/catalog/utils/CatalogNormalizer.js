class CatalogNormalizer {


    normalize(catalog = []){


        const products = [];



        function resolveImage(product){

            if(product.imageUrl){

                return product.imageUrl;

            }


            if(product.image_url){

                return product.image_url;

            }


            if(product.image){

                return URL.createObjectURL(product.image);

            }


            return null;

        }



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
                    resolveImage(product)


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
                        resolveImage(product)


                });


            });


        });



        return products;


    }


}


export default new CatalogNormalizer();