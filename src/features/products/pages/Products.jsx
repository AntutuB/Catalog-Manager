import { useState } from "react";

import ProductTable from "../components/ProductTable";
import ProductModal from "../components/ProductModal";
import ProductHeader from "../components/ProductHeader";

import Tabs from "../../../components/ui/Tabs";
import PageContainer from "../../../components/ui/PageContainer";

import Categories from "../../categories/pages/Categories";

import { useProducts } from "../hooks/useProducts";
import { useCategories } from "../../categories/hooks/useCategories";
import { useExporter } from "../../export/hooks/useExporter";

function Products() {

    const [activeTab, setActiveTab] = useState("products");

    const [
    selectedProducts,
    setSelectedProducts
] = useState([]);

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

    const publicationDate = now
        .toLocaleDateString("es-ES", {
            month: "long",
            year: "numeric"
        })
        .toUpperCase();

    const pdfSettings = {
        brandName: "CATÁLOGO",
        publicationDate,
        city: "HABANA, CUBA",
        description:
            "Una selección curada de monturas ópticas y de sol, fotografiadas sobre blanco puro para que cada silueta se sostenga por sí sola."
    };

    function openCreate() {
        setEditingProduct(null);
        setIsModalOpen(true);
    }

    function openEdit(product) {
        setEditingProduct(product);
        setIsModalOpen(true);
    }

    function closeModal() {
        setEditingProduct(null);
        setIsModalOpen(false);
    }

    return (

    <PageContainer className="h-screen">

        <section className="flex h-full flex-col">

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
                        id: "products",
                        label: "Productos"
                    },
                    {
                        id: "categories",
                        label: "Categorías"
                    }
                ]}
                active={activeTab}
                onChange={setActiveTab}
            />

            <div className="mt-6 flex-1">

                {
                    activeTab === "products" && (

                        <ProductTable

    products={products}

    selectedProducts={selectedProducts}

    onSelectionChange={setSelectedProducts}

    onDelete={removeProduct}

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

        </section>

    </PageContainer>

);

}

export default Products;