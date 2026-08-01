import Select from "../../../../components/ui/Select";

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


   
    return (

        <>


            <Select

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

            </Select>




            <Select

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

            </Select>




            <Select

                value={sortBy}

                onChange={(e)=>
                    setSortBy(e.target.value)
                }


            >

                <option value="name">
                    Nombre
                </option>


                <option value="price">
                    Precio
                </option>


            </Select>


        </>

    );

}


export default ProductFilterSelects;
