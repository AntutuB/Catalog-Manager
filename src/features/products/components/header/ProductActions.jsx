import Button from "../../../../components/ui/Button";


function ProductActions({

    onCreate,

    onExport

}){


    return (

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

    );

}


export default ProductActions;