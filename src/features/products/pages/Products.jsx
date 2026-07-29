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

        pdfRef,

        exportData,

        pdfData,

        exportProductPNG,

        exportCatalogPDF,

        ExportRenderer,

        PdfExportRenderer

    } = useExporter();

    const now = new Date();

    const publicationDate =

        now

            .toLocaleDateString(

                "es-ES",

                {

                    month:"long",

                    year:"numeric"

                }

            )

            .toUpperCase();

    const pdfSettings={

        brandName:"CATÁLOGO",

        publicationDate,

        city:"HABANA, CUBA",

        description:

            "Una selección curada de monturas ópticas y de sol, fotografiadas sobre blanco puro para que cada silueta se sostenga por sí sola."

    };

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

    return(

        <section>

            <h2>

                Productos

            </h2>

            <button

                onClick={openCreate}

            >

                Nuevo producto

            </button>

            <button

                onClick={()=>

                    exportCatalogPDF(

                        products,

                        pdfSettings

                    )

                }

            >

                Exportar PDF

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

            {

                pdfData &&

                <PdfExportRenderer

                    ref={pdfRef}

                    products={pdfData.products}

                    settings={pdfData.settings}

                />

            }

        </section>

    );

}

export default Products;