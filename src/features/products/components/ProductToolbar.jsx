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
                mb-4
                space-y-2
            "
        >

            <div
                className="
                    flex
                    flex-col
                    gap-2
                    lg:flex-row
                    lg:items-center
                "
            >

                <div
                    className="
                        flex-1
                    "
                >

                    <ProductSearch

                        search={search}

                        setSearch={setSearch}

                    />

                </div>



                <div
                    className="
                        flex
                        shrink-0
                        gap-3
                    "
                >

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