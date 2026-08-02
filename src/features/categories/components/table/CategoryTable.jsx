import CategoryToolbar from "../CategoryToolbar";
import CategoryTableView from "./CategoryTableView";

import useCategoryFilters from "../../hooks/useCategoryFilters";
import useCategoryPagination from "../../hooks/useCategoryPagination";


function CategoryTable({

    categories,

    onEdit,

    onDelete

}){


    const {

        search,

        setSearch,

        filteredCategories

    } = useCategoryFilters(categories);



    const {

        currentPage,

        totalPages,

        paginatedItems,

        nextPage,

        previousPage

    } = useCategoryPagination(

        filteredCategories,

        10

    );



    return (

        <div
            className="
                flex
                h-full
                min-h-0
                w-full
                flex-col
            "
        >

            <CategoryToolbar

                search={search}

                setSearch={setSearch}

            />



            <div
                className="
                    flex-1
                    min-h-0
                "
            >

                <CategoryTableView

                    categories={paginatedItems}

                    onEdit={onEdit}

                    onDelete={onDelete}

                    currentPage={currentPage}

                    totalPages={totalPages}

                    totalCategories={
                        filteredCategories.length
                    }

                    onNextPage={nextPage}

                    onPreviousPage={previousPage}

                />

            </div>


        </div>

    );

}


export default CategoryTable;