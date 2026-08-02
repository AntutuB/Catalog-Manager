import { useMemo, useState } from "react";


function useOthersServicesFilters(items){


    const [

        search,

        setSearch

    ] = useState("");



    const filteredItems = useMemo(()=>{


        return items.filter(item =>

            item.name
                .toLowerCase()
                .includes(
                    search.toLowerCase()
                )

        );


    },[
        items,
        search
    ]);



    return {

        search,

        setSearch,

        filteredItems

    };

}


export default useOthersServicesFilters;