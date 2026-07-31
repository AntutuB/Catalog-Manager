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

                return (

    <div
        className="
            w-full
            space-y-6
        "
    >


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

            onClearSelection={() =>
                setSelectedProducts([])
            }

        />



        <div
            className="
                overflow-hidden
                rounded-xl
                border
                border-[#E7E5E1]
                bg-white
            "
        >

            {
                filteredProducts.length === 0

                ?

                (

                    <div
                        className="
                            p-10
                            text-center
                            text-gray-500
                        "
                    >

                        No hay productos registrados.

                    </div>

                )

                :

                (

                    <table
                        className="
                            w-full
                            table-fixed
                            border-collapse
                        "
                    >

                        <thead
                            className="
                                border-b
                                border-[#E7E5E1]
                                bg-[#FAF9F7]
                            "
                        >

                            <tr>

                                <th
                                    className="
                                        w-16
                                        px-6
                                        py-5
                                        text-left
                                        text-xs
                                        font-semibold
                                        uppercase
                                        tracking-wide
                                        text-[#6B6862]
                                    "
                                >

                                    <input

                                        type="checkbox"

                                        checked={
                                            filteredProducts.length > 0 &&
                                            selectedProducts.length === filteredProducts.length
                                        }

                                        onChange={toggleAllProducts}

                                    />

                                </th>



                                <th
                                    className="
                                        w-32
                                        px-6
                                        py-5
                                        text-left
                                        text-xs
                                        font-semibold
                                        uppercase
                                        tracking-wide
                                        text-[#6B6862]
                                    "
                                >

                                    Imagen

                                </th>



                                <th
                                    className="
                                        px-6
                                        py-5
                                        text-left
                                        text-xs
                                        font-semibold
                                        uppercase
                                        tracking-wide
                                        text-[#6B6862]
                                    "
                                >

                                    Nombre

                                </th>



                                <th
                                    className="
                                        w-40
                                        px-6
                                        py-5
                                        text-left
                                        text-xs
                                        font-semibold
                                        uppercase
                                        tracking-wide
                                        text-[#6B6862]
                                    "
                                >

                                    Marca

                                </th>



                                <th
                                    className="
                                        w-40
                                        px-6
                                        py-5
                                        text-left
                                        text-xs
                                        font-semibold
                                        uppercase
                                        tracking-wide
                                        text-[#6B6862]
                                    "
                                >

                                    Tipo

                                </th>



                                <th
                                    className="
                                        w-32
                                        px-6
                                        py-5
                                        text-left
                                        text-xs
                                        font-semibold
                                        uppercase
                                        tracking-wide
                                        text-[#6B6862]
                                    "
                                >

                                    Precio

                                </th>



                                <th
                                    className="
                                        w-72
                                        px-6
                                        py-5
                                        text-left
                                        text-xs
                                        font-semibold
                                        uppercase
                                        tracking-wide
                                        text-[#6B6862]
                                    "
                                >

                                    Acciones

                                </th>


                            </tr>

                        </thead>



                        <tbody>

                            {
                                filteredProducts.map(product => (

                                    <tr

                                        key={product.id}

                                        className="
                                            border-b
                                            border-[#F1EFEB]
                                            transition-colors
                                            hover:bg-[#FAF9F7]
                                        "

                                    >


                                        <td
                                            className="
                                                px-6
                                                py-5
                                            "
                                        >

                                            <input

                                                type="checkbox"

                                                checked={
                                                    selectedProducts.includes(product.id)
                                                }

                                                onChange={() =>
                                                    toggleProductSelection(product.id)
                                                }

                                            />

                                        </td>



                                        <td
                                            className="
                                                px-6
                                                py-5
                                            "
                                        >

                                            {
                                                product.imageUrl && (

                                                    <div
                                                        className="
                                                            flex
                                                            h-20
                                                            w-20
                                                            items-center
                                                            justify-center
                                                            overflow-hidden
                                                            rounded-lg
                                                            border
                                                            border-[#E7E5E1]
                                                            bg-[#FAF9F7]
                                                        "
                                                    >

                                                        <img

                                                            src={product.imageUrl}

                                                            alt={product.name}

                                                            className="
                                                                max-h-full
                                                                max-w-full
                                                                object-contain
                                                            "

                                                        />

                                                    </div>

                                                )
                                            }

                                        </td>



                                        <td
                                            className="
                                                px-6
                                                py-5
                                            "
                                        >

                                            <div className="space-y-1">

                                                <div
                                                    className="
                                                        truncate
                                                        font-medium
                                                        text-[#1C1B1A]
                                                    "
                                                >

                                                    {product.name}

                                                </div>



                                                <div
                                                    className="
                                                        text-sm
                                                        text-[#6B6862]
                                                    "
                                                >

                                                    {product.brand}

                                                </div>



                                                {
                                                    product.categoryName && (

                                                        <div
                                                            className="
                                                                text-xs
                                                                text-[#9A958C]
                                                            "
                                                        >

                                                            {product.categoryName}

                                                        </div>

                                                    )
                                                }

                                            </div>

                                        </td>



                                        <td
                                            className="
                                                px-6
                                                py-5
                                                text-sm
                                                text-[#6B6862]
                                            "
                                        >

                                            {product.brand}

                                        </td>



                                        <td
                                            className="
                                                px-6
                                                py-5
                                            "
                                        >

                                            <span
                                                className="
                                                    inline-flex
                                                    rounded-full
                                                    bg-[#F1EFEB]
                                                    px-3
                                                    py-1
                                                    text-xs
                                                    font-medium
                                                    text-[#6B6862]
                                                "
                                            >

                                                {product.type}

                                            </span>

                                        </td>



                                        <td
                                            className="
                                                px-6
                                                py-5
                                                font-medium
                                                text-[#1C1B1A]
                                            "
                                        >

                                            ${product.price}

                                        </td>



                                        <td
                                            className="
                                                px-6
                                                py-5
                                            "
                                        >

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