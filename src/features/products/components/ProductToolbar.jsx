import {
    Search,
    Trash2,
    X
} from "lucide-react";


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

        <div className="
            flex
            flex-col
            gap-4
            mb-5
        ">


            <div className="
                flex
                flex-wrap
                items-center
                gap-3
            ">


                <div className="
                    relative
                    w-72
                ">


                    <Search

                        size={18}

                        className="
                            absolute
                            left-3
                            top-1/2
                            -translate-y-1/2
                            text-gray-400
                        "

                    />


                    <input

                        type="text"

                        placeholder="Buscar producto..."

                        value={search}

                        onChange={(e)=>

                            setSearch(e.target.value)

                        }

                        className="
                            w-full
                            rounded-lg
                            border
                            px-10
                            py-2
                            outline-none
                            focus:ring-2
                        "

                    />


                </div>




                <select

                    value={categoryFilter}

                    onChange={(e)=>

                        setCategoryFilter(e.target.value)

                    }

                    className="
                        rounded-lg
                        border
                        px-3
                        py-2
                    "

                >

                    {

                        categories.map(category=>(

                            <option

                                key={category}

                                value={category}

                            >

                                {

                                    category==="all"

                                    ?

                                    "Todas las categorías"

                                    :

                                    category

                                }

                            </option>

                        ))

                    }

                </select>





                <select

                    value={typeFilter}

                    onChange={(e)=>

                        setTypeFilter(e.target.value)

                    }

                    className="
                        rounded-lg
                        border
                        px-3
                        py-2
                    "

                >

                    {

                        types.map(type=>(

                            <option

                                key={type}

                                value={type}

                            >

                                {

                                    type==="all"

                                    ?

                                    "Todos los tipos"

                                    :

                                    type

                                }

                            </option>

                        ))

                    }

                </select>





                <select

                    value={sortBy}

                    onChange={(e)=>

                        setSortBy(e.target.value)

                    }

                    className="
                        rounded-lg
                        border
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


            </div>





            {
                selectedCount > 0 && (

                    <div className="
                        flex
                        items-center
                        justify-between
                        rounded-lg
                        bg-gray-50
                        px-4
                        py-3
                    ">


                        <span className="
                            text-sm
                            text-gray-600
                        ">

                            {selectedCount}

                            {" "}

                            producto(s) seleccionado(s)

                        </span>




                        <div className="
                            flex
                            items-center
                            gap-3
                        ">


                            <button

                                onClick={onClearSelection}

                                className="
                                    flex
                                    items-center
                                    gap-2
                                    rounded-lg
                                    border
                                    px-4
                                    py-2
                                "

                            >

                                <X size={16}/>

                                Limpiar


                            </button>





                            <button

                                onClick={onDeleteSelected}

                                className="
                                    flex
                                    items-center
                                    gap-2
                                    rounded-lg
                                    bg-red-600
                                    px-4
                                    py-2
                                    text-white
                                "

                            >

                                <Trash2 size={16}/>

                                Eliminar


                            </button>


                        </div>


                    </div>

                )
            }


        </div>

    );

}


export default ProductToolbar;