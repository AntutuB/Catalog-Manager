import OthersServicesTableHeader from "./OthersServicesTableHeader";
import OthersServicesTableRow from "./OthersServicesTableRow";


function OthersServicesTableView({

    othersServices,

    onEdit,

    onDelete,

    currentPage,

    totalPages,

    totalItems,

    onNextPage,

    onPreviousPage

}){


    return (

        <div

            className="
                flex
                h-full
                min-h-0
                flex-col
                overflow-hidden
                rounded-xl
                border
                border-[#E7E5E1]
                bg-white
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
                    "

                >

                    <OthersServicesTableHeader />


                    <tbody>

                        {
                            othersServices.map(item => (

                                <OthersServicesTableRow

                                    key={item.id}

                                    item={item}

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

                    Mostrando {othersServices.length} de {totalItems}

                </span>



                <div

                    className="
                        flex
                        items-center
                        gap-3
                    "

                >

                    <button

                        onClick={onPreviousPage}

                        disabled={currentPage===1}

                        className="
                            rounded-lg
                            border
                            px-3
                            py-1
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

                        disabled={currentPage===totalPages}

                        className="
                            rounded-lg
                            border
                            px-3
                            py-1
                            disabled:opacity-40
                        "

                    >

                        Siguiente

                    </button>


                </div>


            </div>


        </div>

    );

}


export default OthersServicesTableView;