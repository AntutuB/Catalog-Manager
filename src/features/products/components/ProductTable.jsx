import { useEffect, useMemo, useState } from "react";

import ProductToolbar from "./ProductToolbar";

import ProductActions from "./ProductActions";


function ProductTable({

    products,

    selectedProducts,

    setSelectedProducts,

    onDelete,

    onDeleteSelected,

    onEdit,

    onExportStory

}){


    const [

        productsWithImages,

        setProductsWithImages

    ] = useState([]);




    const [

        search,

        setSearch

    ] = useState("");




    const [

        categoryFilter,

        setCategoryFilter

    ] = useState("all");




    const [

        typeFilter,

        setTypeFilter

    ] = useState("all");




    const [

        sortBy,

        setSortBy

    ] = useState("name");





    function toggleProductSelection(id){


        if(selectedProducts.includes(id)){


            setSelectedProducts(

                selectedProducts.filter(

                    productId => productId !== id

                )

            );


        }else{


            setSelectedProducts([

                ...selectedProducts,

                id

            ]);


        }


    }





    function toggleAllProducts(){


        if(

            selectedProducts.length === filteredProducts.length

        ){


            setSelectedProducts([]);


        }else{


            setSelectedProducts(

                filteredProducts.map(

                    product => product.id

                )

            );


        }


    }





    useEffect(()=>{


        const data = products.map(product=>{


            let imageUrl = null;



            if(product.image){


                imageUrl = URL.createObjectURL(

                    product.image

                );


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





    const categories = useMemo(()=>{


        return [

            "all",

            ...new Set(

                productsWithImages

                    .map(product=>product.categoryName)

                    .filter(Boolean)

            )

        ];


    },[productsWithImages]);





    const types = useMemo(()=>{


        return [

            "all",

            ...new Set(

                productsWithImages

                    .map(product=>product.type)

                    .filter(Boolean)

            )

        ];


    },[productsWithImages]);





    const filteredProducts = useMemo(()=>{


        let data = [

            ...productsWithImages

        ];



        if(search.trim()){


            const value = search.toLowerCase();



            data = data.filter(product=>

                product.name
                    ?.toLowerCase()
                    .includes(value)

                ||

                product.brand
                    ?.toLowerCase()
                    .includes(value)

            );


        }




        if(categoryFilter !== "all"){


            data = data.filter(product=>

                product.categoryName === categoryFilter

            );


        }




        if(typeFilter !== "all"){


            data = data.filter(product=>

                product.type === typeFilter

            );


        }




        if(sortBy === "price"){


            data.sort((a,b)=>

                Number(a.price)-Number(b.price)

            );


        }else{


            data.sort((a,b)=>

                a.name.localeCompare(b.name)

            );


        }



        return data;



    },[

        productsWithImages,

        search,

        categoryFilter,

        typeFilter,

        sortBy

    ]);

        return(

        <div className="w-full space-y-4">


            <ProductToolbar

    search={search}

    setSearch={setSearch}


    categoryFilter={categoryFilter}

    setCategoryFilter={setCategoryFilter}


    typeFilter={typeFilter}

    setTypeFilter={setTypeFilter}


    sortBy={sortBy}

    setSortBy={setSortBy}


    categories={categories}

    types={types}


    selectedCount={selectedProducts.length}


    onDeleteSelected={onDeleteSelected}


    onClearSelection={()=>setSelectedProducts([])}

/>



            <div className="w-full overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">


                {

                    filteredProducts.length === 0

                    ?

                    (

                        <div className="p-10 text-center text-gray-500">

                            No hay productos registrados.

                        </div>

                    )

                    :

                    (

                        <table className="w-full table-fixed border-collapse">


                            <thead className="bg-gray-50">


                                <tr>


                                    <th className="w-16 px-5 py-4">

                                        <input

                                            type="checkbox"

                                            checked={

                                                filteredProducts.length > 0 &&

                                                selectedProducts.length === filteredProducts.length

                                            }

                                            onChange={toggleAllProducts}

                                        />

                                    </th>



                                    <th className="w-28 px-5 py-4 text-left font-semibold">

                                        Imagen

                                    </th>



                                    <th className="px-5 py-4 text-left font-semibold">

                                        Nombre

                                    </th>



                                    <th className="w-40 px-5 py-4 text-left font-semibold">

                                        Marca

                                    </th>



                                    <th className="w-40 px-5 py-4 text-left font-semibold">

                                        Tipo

                                    </th>



                                    <th className="w-32 px-5 py-4 text-left font-semibold">

                                        Precio

                                    </th>



                                    <th className="w-64 px-5 py-4 text-left font-semibold">

                                        Acciones

                                    </th>


                                </tr>


                            </thead>





                            <tbody>


                                {

                                    filteredProducts.map(product=>(


                                        <tr

                                            key={product.id}

                                            className="hover:bg-gray-50 transition-colors"

                                        >



                                            <td className="px-5 py-4 border-t border-gray-100">


                                                <input

                                                    type="checkbox"

                                                    checked={

                                                        selectedProducts.includes(product.id)

                                                    }

                                                    onChange={()=>


                                                        toggleProductSelection(product.id)


                                                    }

                                                />


                                            </td>





                                            <td className="px-5 py-4 border-t border-gray-100">


                                                {

                                                    product.imageUrl &&


                                                    (

                                                        <div

                                                            style={{


                                                                width:"80px",


                                                                height:"80px",


                                                                display:"flex",


                                                                alignItems:"center",


                                                                justifyContent:"center",


                                                                overflow:"hidden",


                                                                background:"#F9FAFB",


                                                                borderRadius:"8px",


                                                                border:"1px solid #E5E7EB"


                                                            }}

                                                        >


                                                            <img

                                                                src={product.imageUrl}

                                                                alt={product.name}

                                                                style={{


                                                                    maxWidth:"100%",


                                                                    maxHeight:"100%",


                                                                    width:"auto",


                                                                    height:"auto",


                                                                    objectFit:"contain",


                                                                    display:"block"


                                                                }}

                                                            />


                                                        </div>


                                                    )

                                                }


                                            </td>





                                            <td className="px-5 py-4 border-t border-gray-100">


                                                <div className="truncate font-medium">

                                                    {product.name}

                                                </div>


                                            </td>





                                            <td className="px-5 py-4 border-t border-gray-100">

                                                {product.brand}

                                            </td>





                                            <td className="px-5 py-4 border-t border-gray-100">

                                                {product.type}

                                            </td>





                                            <td className="px-5 py-4 border-t border-gray-100">

                                                ${product.price}

                                            </td>





                                            <td className="px-5 py-4 border-t border-gray-100">


                                                <ProductActions

    product={product}

    onEdit={onEdit}

    onDelete={onDelete}

    onExportStory={onExportStory}

/>


                                            </td>


                                        </tr>


                                    ))

                                }


                            </tbody>


                        </table>

                    )

                }


            </div>


        </div>


    );

}


export default ProductTable;