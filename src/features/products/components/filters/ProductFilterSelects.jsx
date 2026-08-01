function ProductFilterSelects({

    categoryFilter,

    setCategoryFilter,

    typeFilter,

    setTypeFilter,

    sortBy,

    setSortBy,

    categories,

    types

}){


    const selectClass = `
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
    `;



    return (

        <>


            <select

                value={categoryFilter}

                onChange={(e)=>
                    setCategoryFilter(e.target.value)
                }

                className={selectClass}

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

                className={selectClass}

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

                className={selectClass}

            >

                <option value="name">
                    Nombre
                </option>


                <option value="price">
                    Precio
                </option>


            </select>


        </>

    );

}


export default ProductFilterSelects;
