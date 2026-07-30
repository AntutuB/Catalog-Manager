import Button from "../../../components/ui/Button";


function ProductHeader({
    onCreate,
    onExport
}){


    return (

        <div

            className="
                flex
                justify-between
                items-center
                mb-6
            "

        >

            <h1
                className="
                    text-3xl
                    font-semibold
                "
            >

                Productos

            </h1>


            <div className="flex gap-3">


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