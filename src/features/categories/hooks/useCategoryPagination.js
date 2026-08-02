import { useState } from "react";


function useCategoryPagination(

    items,

    itemsPerPage = 10

){


    const [

        currentPage,

        setCurrentPage

    ] = useState(1);



    const totalPages = Math.ceil(

        items.length / itemsPerPage

    );



    const startIndex =

        (currentPage - 1) * itemsPerPage;



    const paginatedItems =

        items.slice(

            startIndex,

            startIndex + itemsPerPage

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

        previousPage,

        setCurrentPage

    };

}


export default useCategoryPagination;