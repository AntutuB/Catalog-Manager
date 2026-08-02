import { useMemo, useState } from "react";


function useCategoryFilters(categories){

    const [

        search,

        setSearch

    ] = useState("");



    const filteredCategories = useMemo(()=>{


        return categories.filter(category =>

            category.name
                .toLowerCase()
                .includes(
                    search.toLowerCase()
                )

        );


    },[
        categories,
        search
    ]);



    return {

        search,

        setSearch,

        filteredCategories

    };

}


export default useCategoryFilters;