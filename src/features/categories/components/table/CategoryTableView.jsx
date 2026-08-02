import Surface from "../../../../components/ui/Surface";

import CategoryTableHeader from "./CategoryTableHeader";
import CategoryTableRow from "./CategoryTableRow";


function CategoryTableView({

    categories,

    onEdit,

    onDelete,

    currentPage,

    totalPages,

    totalCategories,

    onNextPage,

    onPreviousPage

}){


    return (

        <Surface

            className="
                flex
                h-full
                min-h-0
                flex-col
                overflow-hidden
            "

        >

            <div
                className="
                    flex-1
                    min-h-0
                    overflow-y-auto
                "
            >

                <table
                    className="
                        w-full
                        table-fixed
                        border-collapse
                    "
                >

                    <CategoryTableHeader />


                    <tbody>

                        {
                            categories.map(category => (

                                <CategoryTableRow

                                    key={category.id}

                                    category={category}

                                    onEdit={onEdit}

                                    onDelete={onDelete}

                                />

                            ))
                        }

                    </tbody>


                </table>


            </div>



            <div
                className="
                    flex
                    shrink-0
                    items-center
                    justify-between
                    border-t
                    border-[#E7E5E1]
                    px-6
                    py-3
                    text-sm
                    text-[#6B6862]
                "
            >

                <span>

                    Mostrando {categories.length} de {totalCategories} categorías

                </span>


                <div
                    className="
                        flex
                        items-center
                        gap-2
                    "
                >

                    <button

                        onClick={onPreviousPage}

                        disabled={currentPage === 1}

                        className="
                            rounded-lg
                            border
                            border-[#E7E5E1]
                            px-3
                            py-1.5
                            disabled:opacity-40
                        "

                    >

                        Anterior

                    </button>


                    <span>

                        {currentPage} / {totalPages || 1}

                    </span>


                    <button

                        onClick={onNextPage}

                        disabled={currentPage === totalPages}

                        className="
                            rounded-lg
                            border
                            border-[#E7E5E1]
                            px-3
                            py-1.5
                            disabled:opacity-40
                        "

                    >

                        Siguiente

                    </button>


                </div>


            </div>


        </Surface>

    );

}


export default CategoryTableView;