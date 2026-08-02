import OthersServicesToolbar from "./OthersServicesToolbar";
import OthersServicesTableView from "./table/OthersServicesTableView";

import useOthersServicesFilters from "../hooks/useOthersServicesFilters";
import useOthersServicesPagination from "../hooks/useOthersServicesPagination";


function OthersServicesTable({

    othersServices,

    onCreate,

    onEdit,

    onDelete

}){


    const {

        search,

        setSearch,

        filteredItems

    } = useOthersServicesFilters(

        othersServices

    );



    const {

        currentPage,

        totalPages,

        paginatedItems,

        nextPage,

        previousPage

    } = useOthersServicesPagination(

        filteredItems,

        10

    );



    return (

        <div

            className="
                flex
                h-full
                min-h-0
                flex-col
            "

        >


            <OthersServicesToolbar

                search={search}

                setSearch={setSearch}

                onCreate={onCreate}

            />



            <OthersServicesTableView

                othersServices={paginatedItems}

                onEdit={onEdit}

                onDelete={onDelete}

                currentPage={currentPage}

                totalPages={totalPages}

                totalItems={filteredItems.length}

                onNextPage={nextPage}

                onPreviousPage={previousPage}

            />


        </div>

    );

}


export default OthersServicesTable;