import { useState } from "react";

import ProductTable from "../components/ProductTable";
import ProductModal from "../components/ProductModal";
import ProductHeader from "../components/ProductHeader";
import ContentContainer from "../../../components/layout/ContentContainer";

import Tabs from "../../../components/ui/Tabs";
import PageContainer from "../../../components/ui/PageContainer";

import Header from "../../../components/layout/Header";

import Categories from "../../categories/pages/Categories";

import { useProducts } from "../hooks/useProducts";
import { useCategories } from "../../categories/hooks/useCategories";
import { useExporter } from "../../export/hooks/useExporter";
import useProductModal from "../hooks/useProductModal";
import useBulkDelete from "../hooks/useBulkDelete";
import useProductExport from "../hooks/useProductExport";


function Products(){

    const [activeTab,setActiveTab] = useState("products");


    const {
        products,
        addProduct,
        editProduct,
        removeProduct
    } = useProducts();



    const {

        selectedProducts,

        setSelectedProducts,

        deleteSelectedProducts

    } = useBulkDelete(removeProduct);



    const {

        isModalOpen,

        editingProduct,

        openCreate,

        openEdit,

        closeModal

    } = useProductModal();



    const {

        pdfSettings

    } = useProductExport();



    const {
        categories
    } = useCategories();



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



    return (

        <PageContainer>

            <Header />


            <ContentContainer>


                <ProductHeader

                    onCreate={openCreate}

                    onExport={() =>
                        exportCatalogPDF(
                            products,
                            pdfSettings
                        )
                    }

                />



                <Tabs

                    tabs={[
                        {
                            id:"products",
                            label:"Productos"
                        },
                        {
                            id:"categories",
                            label:"Categorías"
                        }
                    ]}

                    active={activeTab}

                    onChange={setActiveTab}

                />



                <div
                    className="
                        mt-6
                        flex-1
                        min-h-0
                        flex
                        flex-col
                        overflow-hidden
                    "
                >

                    {
                        activeTab === "products" && (

                            <ProductTable

                                className="
                                    flex-1
                                    min-h-0
                                "

                                products={products}

                                selectedProducts={selectedProducts}

                                setSelectedProducts={setSelectedProducts}

                                onDelete={removeProduct}

                                onDeleteSelected={deleteSelectedProducts}

                                onEdit={openEdit}

                                onExportStory={(product)=>

                                    exportProductPNG(
                                        product,
                                        "instagram-story"
                                    )

                                }

                            />

                        )
                    }



                    {
                        activeTab === "categories" && (

                            <Categories />

                        )
                    }


                </div>



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
                    exportData && (

                        <ExportRenderer

                            ref={exportRef}

                            template={exportData.template}

                            product={exportData.product}

                        />

                    )
                }



                {
                    pdfData && (

                        <PdfExportRenderer

                            ref={pdfRef}

                            products={pdfData.products}

                            settings={pdfData.settings}

                        />

                    )
                }


            </ContentContainer>


        </PageContainer>

    );

}


export default Products;