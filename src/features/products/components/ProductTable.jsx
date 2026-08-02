import ProductToolbar from "./ProductToolbar";
import ProductTableView from "./table/ProductTableView";

import useProductFilters from "../hooks/useProductFilters";
import useProductSelection from "../hooks/useProductSelection";
import useProductsWithImages from "../hooks/useProductsWithImages";
import usePagination from "../hooks/usePagination";


function ProductTable({

    products,

    categories: databaseCategories,

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

    } = useProductFilters(

        productsWithImages,

        databaseCategories

    );



    const {

        currentPage,

        totalPages,

        paginatedItems,

        nextPage,

        previousPage,

        setCurrentPage

    } = usePagination(

        filteredProducts,

        10

    );



    const {

        toggleProductSelection,

        toggleAllProducts,

        clearSelection

    } = useProductSelection(

        selectedProducts,

        setSelectedProducts,

        paginatedItems

    );



    return (

        <div
            className="
                flex
                h-full
                min-h-0
                w-full
                flex-col
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



            <div
                className="
                    flex-1
                    min-h-0
                "
            >

                <ProductTableView

                    products={paginatedItems}

                    selectedProducts={selectedProducts}

                    totalFilteredProducts={filteredProducts.length}

                    totalProducts={products.length} 

                    toggleProductSelection={toggleProductSelection}

                    toggleAllProducts={toggleAllProducts}

                    onEdit={onEdit}

                    onDelete={onDelete}

                    onExportStory={onExportStory}

                    currentPage={currentPage}

                    totalPages={totalPages}

                    onNextPage={nextPage}

                    onPreviousPage={previousPage}

                    onChangePage={setCurrentPage}

                    totalProducts={filteredProducts.length}

                />

            </div>


        </div>

    );

}


export default ProductTable;