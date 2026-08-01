import ProductToolbar from "../ProductToolbar";


function ProductFilters({

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

            selectedCount={selectedCount}

            onDeleteSelected={onDeleteSelected}

            onClearSelection={onClearSelection}

        />

    );

}


export default ProductFilters;
