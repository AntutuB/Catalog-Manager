import ProductTable from "../components/ProductTable";

import ProductModal from "../components/ProductModal";

import { useProducts } from "../hooks/useProducts";

import { useCategories } from "../../categories/hooks/useCategories";

import { useState } from "react";


import { useExporter } from "../../export/hooks/useExporter";



function Products(){


    const {

        products,

        addProduct,

        editProduct,

        removeProduct

    } = useProducts();



    const {

        categories

    } = useCategories();




    const [

        isModalOpen,

        setIsModalOpen

    ] = useState(false);




    const [

        editingProduct,

        setEditingProduct

    ] = useState(null);




    const {

        exportRef,

        exportData,

        exportProductPNG,

        ExportRenderer

    } = useExporter();





    function openCreate(){

        setEditingProduct(null);

        setIsModalOpen(true);

    }





    function openEdit(product){

        setEditingProduct(product);

        setIsModalOpen(true);

    }





    function closeModal(){

        setEditingProduct(null);

        setIsModalOpen(false);

    }





    return (

        <section>


            <h2>

                Productos

            </h2>




            <button

                onClick={openCreate}

            >

                Nuevo producto

            </button>





            <ProductTable

                products={products}

                onDelete={removeProduct}

                onEdit={openEdit}

                onExportStory={(product)=>

                    exportProductPNG(

                        product,

                        "instagram-story"

                    )

                }

            />





            <ProductModal

                isOpen={isModalOpen}

                onClose={closeModal}

                categories={categories}

                onAdd={addProduct}

                onEdit={editProduct}

                editingProduct={editingProduct}

                cancelEdit={closeModal}

            />





            {

                exportData &&

                <ExportRenderer

                    ref={exportRef}

                    template={exportData.template}

                    product={exportData.product}

                />

            }



        </section>

    );

}



export default Products;