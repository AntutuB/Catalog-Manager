import { ChevronDown } from "lucide-react";

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


    const selectClass = `
        pr-10
        appearance-none
    `;



    function SelectWrapper({

        children,

        value,

        onChange

    }){

        return (

            <div
                className="
                    relative
                "
            >

                <Select

                    value={value}

                    onChange={onChange}

                    className={selectClass}

                >

                    {children}

                </Select>


                <ChevronDown

                    size={16}

                    className="
                        pointer-events-none
                        absolute
                        right-3
                        top-1/2
                        -translate-y-1/2
                        text-[#6B6862]
                    "

                />

            </div>

        );

    }



    return (

        <>


            <SelectWrapper

                value={categoryFilter}

                onChange={(e)=>
                    setCategoryFilter(e.target.value)
                }

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

            </SelectWrapper>




            <SelectWrapper

                value={typeFilter}

                onChange={(e)=>
                    setTypeFilter(e.target.value)
                }

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

            </SelectWrapper>




            <SelectWrapper

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


            </SelectWrapper>


        </>

    );

}


export default ProductFilterSelects;