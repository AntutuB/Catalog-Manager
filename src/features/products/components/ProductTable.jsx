import { useEffect, useState } from "react";


function ProductTable({

    products,

    onDelete,

    onEdit,

    onExportStory

}) {


    const [

        productsWithImages,

        setProductsWithImages

    ] = useState([]);



    useEffect(()=>{


        const data = products.map(product=>{


            let imageUrl = null;



            if(product.image){

                imageUrl =
                    URL.createObjectURL(product.image);

            }



            return {

                ...product,

                imageUrl

            };


        });



        setProductsWithImages(data);



        return ()=>{


            data.forEach(product=>{


                if(product.imageUrl){

                    URL.revokeObjectURL(

                        product.imageUrl

                    );

                }


            });


        };


    },[products]);




    return (

        <div>


            {

                productsWithImages.length === 0

                ?

                (

                    <p>

                        No hay productos registrados.

                    </p>

                )

                :

                (

                    <table>


                        <thead>

                            <tr>

                                <th>
                                    Imagen
                                </th>

                                <th>
                                    Nombre
                                </th>

                                <th>
                                    Marca
                                </th>

                                <th>
                                    Tipo
                                </th>

                                <th>
                                    Precio
                                </th>

                                <th>
                                    Acciones
                                </th>

                            </tr>

                        </thead>



                        <tbody>


                            {

                                productsWithImages.map(product=>(


                                    <tr

                                        key={product.id}

                                    >


                                        <td>


                                            {

                                                product.imageUrl &&

                                                <img

                                                    src={product.imageUrl}

                                                    width="80"

                                                    alt={product.name}

                                                />

                                            }


                                        </td>



                                        <td>

                                            {product.name}

                                        </td>



                                        <td>

                                            {product.brand}

                                        </td>



                                        <td>

                                            {product.type}

                                        </td>



                                        <td>

                                            ${product.price}

                                        </td>



                                        <td>


                                            <button

                                                onClick={()=>

                                                    onEdit(product)

                                                }

                                            >

                                                Editar

                                            </button>



                                            <button

                                                onClick={()=>

                                                    onDelete(product.id)

                                                }

                                            >

                                                Eliminar

                                            </button>



                                            <button

                                                onClick={()=>

                                                    onExportStory(product)

                                                }

                                            >

                                                PNG Story

                                            </button>



                                            <button>

                                                PNG Post

                                            </button>



                                        </td>



                                    </tr>


                                ))

                            }


                        </tbody>


                    </table>

                )

            }


        </div>

    );

}


export default ProductTable;