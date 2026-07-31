import Button from "../../../components/ui/Button";

import ProductStats from "./stats/ProductStats";


function ProductHeader({

    onCreate,

    onExport

}){


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


            <ProductStats />



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
