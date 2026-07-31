import Button from "../../../components/ui/Button";

import { useProducts } from "../hooks/useProducts";
import { useCategories } from "../../categories/hooks/useCategories";


function ProductHeader({

    onCreate,

    onExport

}){


    const {
        products
    } = useProducts();



    const {
        categories
    } = useCategories();



    const lastUpdate = new Date()

        .toLocaleDateString(

            "es-ES"

        );



    return (

        <div
            className="
                mb-8
                flex
                flex-col
                gap-6
                lg:flex-row
                lg:items-end
                lg:justify-between
            "
        >


            <div
                className="
                    grid
                    grid-cols-1
                    gap-3
                    sm:grid-cols-3
                "
            >


                <div
                    className="
                        rounded-xl
                        border
                        border-[#E7E5E1]
                        bg-white
                        px-5
                        py-4
                        min-w-[180px]
                    "
                >

                    <p
                        className="
                            text-xs
                            text-[#6B6862]
                        "
                    >

                        Total de productos

                    </p>


                    <p
                        className="
                            mt-1
                            text-xl
                            font-semibold
                            text-[#1C1B1A]
                        "
                    >

                        {products.length}

                    </p>


                </div>




                <div
                    className="
                        rounded-xl
                        border
                        border-[#E7E5E1]
                        bg-white
                        px-5
                        py-4
                        min-w-[180px]
                    "
                >

                    <p
                        className="
                            text-xs
                            text-[#6B6862]
                        "
                    >

                        Categorías

                    </p>


                    <p
                        className="
                            mt-1
                            text-xl
                            font-semibold
                            text-[#1C1B1A]
                        "
                    >

                        {categories.length}

                    </p>


                </div>




                <div
                    className="
                        rounded-xl
                        border
                        border-[#E7E5E1]
                        bg-white
                        px-5
                        py-4
                        min-w-[180px]
                    "
                >

                    <p
                        className="
                            text-xs
                            text-[#6B6862]
                        "
                    >

                        Última actualización

                    </p>


                    <p
                        className="
                            mt-1
                            text-xl
                            font-semibold
                            text-[#1C1B1A]
                        "
                    >

                        {lastUpdate}

                    </p>


                </div>


            </div>





            <div
                className="
                    flex
                    gap-3
                "
            >


                <Button

                    onClick={onCreate}

                >

                    Nuevo producto

                </Button>



                <Button

                    variant="secondary"

                    onClick={onExport}

                >

                    Exportar PDF

                </Button>


            </div>


        </div>

    );

}


export default ProductHeader;