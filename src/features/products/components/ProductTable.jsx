import ProductToolbar from "./ProductToolbar";
import ProductTableView from "./table/ProductTableView";

import useProductFilters from "../hooks/useProductFilters";
import useProductSelection from "../hooks/useProductSelection";
import useProductsWithImages from "../hooks/useProductsWithImages";


function ProductTable({

    products,

    selectedProducts,

    setSelectedProducts,

    onDelete,

    onDeleteSelected,

    onEdit,

    onExportStory

}){


    const productsWithImages =
        useProductsWithImages(products);



    const {

        search,
        setSearch,

        categoryFilter,
        setCategoryFilter,

        typeFilter,
        setTypeFilter,

        sortBy,
        setSortBy,

        categories,
        types,

        filteredProducts

    } = useProductFilters(productsWithImages);



    const {

        toggleProductSelection,

        toggleAllProducts,

        clearSelection

    } = useProductSelection(

        selectedProducts,

        setSelectedProducts,

        filteredProducts

    );



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

                onClearSelection={clearSelection}

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