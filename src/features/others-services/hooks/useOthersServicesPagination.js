import { useState } from "react";


function useOthersServicesPagination(

    items,

    itemsPerPage=10

){


    const [

        currentPage,

        setCurrentPage

    ] = useState(1);



    const totalPages = Math.ceil(

        items.length / itemsPerPage

    );



    const paginatedItems = items.slice(

        (currentPage - 1) * itemsPerPage,

        currentPage * itemsPerPage

    );



    function nextPage(){

        setCurrentPage(page =>

            Math.min(
                page + 1,
                totalPages
            )

        );

    }



    function previousPage(){

        setCurrentPage(page =>

            Math.max(
                page - 1,
                1
            )

        );

    }



    return {

        currentPage,

        totalPages,

        paginatedItems,

        nextPage,

        previousPage

    };

}


export default useOthersServicesPagination;