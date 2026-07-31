import {
    Search,
    Trash2,
    X
} from "lucide-react";

import Select from "../../../components/ui/Select";
import Input from "../../../components/ui/Input";

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


    const selectClass = `
        h-10
        rounded-lg
        border
        border-[#E7E5E1]
        bg-white
        px-4
        text-sm
        text-[#1C1B1A]
        outline-none
        transition
        hover:border-[#CFCBC3]
        focus:border-[#1C1B1A]
    `;



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


            <div
                className="
                    relative
                    w-full
                    lg:w-80
                "
            >

                <Search

                    size={17}

                    className="
                        absolute
                        left-3.5
                        top-1/2
                        -translate-y-1/2
                        text-[#9A958C]
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
        h-11
        w-full
        rounded-xl
        border
        border-[#E7E5E1]
        bg-white
        pl-10
        pr-4
        text-sm
        text-[#1C1B1A]
        placeholder:text-[#9A958C]
        outline-none
        transition-colors
        hover:border-[#D6D3CE]
        focus:border-black
        focus:ring-2
        focus:ring-black/5
    "

/>

            </div>




            <select

                value={categoryFilter}

                onChange={(e)=>
                    setCategoryFilter(e.target.value)
                }

                className="
                    h-11
                    rounded-xl
                    border
                    border-[#E7E5E1]
                    bg-white
                    px-4
                    text-sm
                    text-[#1C1B1A]
                    outline-none
                    hover:border-[#D6D3CE]
                    focus:border-black
                    focus:ring-2
                    focus:ring-black/5
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
                    h-11
                    rounded-xl
                    border
                    border-[#E7E5E1]
                    bg-white
                    px-4
                    text-sm
                    text-[#1C1B1A]
                    outline-none
                    hover:border-[#D6D3CE]
                    focus:border-black
                    focus:ring-2
                    focus:ring-black/5
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
                    h-11
                    rounded-xl
                    border
                    border-[#E7E5E1]
                    bg-white
                    px-4
                    text-sm
                    text-[#1C1B1A]
                    outline-none
                    hover:border-[#D6D3CE]
                    focus:border-black
                    focus:ring-2
                    focus:ring-black/5
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

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        rounded-xl
                        border
                        border-[#E7E5E1]
                        bg-white
                        px-5
                        py-3
                    "
                >

                    <span
                        className="
                            text-sm
                            text-[#6B6862]
                        "
                    >

                        {selectedCount} producto(s) seleccionado(s)

                    </span>



                    <div
                        className="
                            flex
                            items-center
                            gap-3
                        "
                    >

                        <button

                            onClick={onClearSelection}

                            className="
                                rounded-xl
                                border
                                border-[#E7E5E1]
                                px-4
                                py-2
                                text-sm
                                text-[#1C1B1A]
                                transition-colors
                                hover:bg-[#FAF9F7]
                            "

                        >

                            Limpiar

                        </button>



                        <button

                            onClick={onDeleteSelected}

                            className="
                                rounded-xl
                                bg-red-600
                                px-4
                                py-2
                                text-sm
                                text-white
                                transition-colors
                                hover:bg-red-700
                            "

                        >

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