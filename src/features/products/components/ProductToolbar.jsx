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

    onDeleteSelected

}){

    return(

        <div
            className="
                mb-5
                flex
                flex-wrap
                items-center
                gap-3
            "
        >

            <input

                type="text"

                placeholder="Buscar producto..."

                value={search}

                onChange={(e)=>

                    setSearch(e.target.value)

                }

                className="
                    border
                    rounded-lg
                    px-3
                    py-2
                    w-72
                "

            />

            <select

                value={categoryFilter}

                onChange={(e)=>

                    setCategoryFilter(e.target.value)

                }

                className="
                    border
                    rounded-lg
                    px-3
                    py-2
                "

            >

                {

                    categories.map(category=>

                        <option

                            key={category}

                            value={category}

                        >

                            {

                                category==="all"

                                    ? "Todas las categorías"

                                    : category

                            }

                        </option>

                    )

                }

            </select>

            <select

                value={typeFilter}

                onChange={(e)=>

                    setTypeFilter(e.target.value)

                }

                className="
                    border
                    rounded-lg
                    px-3
                    py-2
                "

            >

                {

                    types.map(type=>

                        <option

                            key={type}

                            value={type}

                        >

                            {

                                type==="all"

                                    ? "Todos los tipos"

                                    : type

                            }

                        </option>

                    )

                }

            </select>

            <select

                value={sortBy}

                onChange={(e)=>

                    setSortBy(e.target.value)

                }

                className="
                    border
                    rounded-lg
                    px-3
                    py-2
                "

            >

                <option value="name">

                    Nombre

                </option>

                <option value="price">

                    Precio

                </option>

            </select>

            <div className="ml-auto flex items-center gap-4">

                <span>

                    {selectedCount} seleccionados

                </span>

                <button

                    disabled={selectedCount===0}

                    onClick={onDeleteSelected}

                    className="
                        bg-red-600
                        text-white
                        rounded-lg
                        px-4
                        py-2
                        disabled:opacity-40
                    "

                >

                    Eliminar seleccionados

                </button>

            </div>

        </div>

    );

}

export default ProductToolbar;