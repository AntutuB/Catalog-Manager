import ProductSearch from "./filters/ProductSearch";
import ProductFilterSelects from "./filters/ProductFilterSelects";
import ProductSelectionBar from "./filters/ProductSelectionBar";


function ProductToolbar({

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

    selectedCount,

    onDeleteSelected,

    onClearSelection

}){


    return (

        <div
            className="
                mb-6
                space-y-4
            "
        >

            <div
                className="
                    flex
                    flex-col
                    gap-3
                    lg:flex-row
                    lg:items-center
                "
            >

                <ProductSearch

                    search={search}

                    setSearch={setSearch}

                />


                <ProductFilterSelects

                    categoryFilter={categoryFilter}

                    setCategoryFilter={setCategoryFilter}

                    typeFilter={typeFilter}

                    setTypeFilter={setTypeFilter}

                    sortBy={sortBy}

                    setSortBy={setSortBy}

                    categories={categories}

                    types={types}

                />

            </div>



            <ProductSelectionBar

                selectedCount={selectedCount}

                onDeleteSelected={onDeleteSelected}

                onClearSelection={onClearSelection}

            />


        </div>

    );

}


export default ProductToolbar;
