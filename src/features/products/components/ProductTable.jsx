import { useEffect, useMemo, useState } from "react";

import ProductToolbar from "./ProductToolbar";

import ProductActions from "./ProductActions";

import ProductTableView from "./table/ProductTableView";


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


        <ProductTableView

            products={filteredProducts}

            selectedProducts={selectedProducts}

            toggleProductSelection={toggleProductSelection}

            toggleAllProducts={toggleAllProducts}

            onEdit={onEdit}

            onDelete={onDelete}

            onExportStory={onExportStory}

        />


    </div>

);


}


export default ProductTable;