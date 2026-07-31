import Button from "../../../components/ui/Button";


function ProductHeader({

    onCreate,

    onExport

}){


    return (

        <div className="
            flex
            items-center
            justify-between
            mb-8
        ">


            <div>

                <h1 className="
                    text-3xl
                    font-semibold
                    tracking-tight
                ">

                    Productos

                </h1>



                <p className="
                    mt-1
                    text-sm
                    text-gray-500
                ">

                    Administra y organiza tu catálogo de productos.

                </p>


            </div>





            <div className="
                flex
                gap-3
            ">


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