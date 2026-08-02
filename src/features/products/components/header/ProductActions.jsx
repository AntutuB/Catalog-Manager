import Button from "../../../../components/ui/Button";
import ActionGroup from "../../../../components/ui/ActionGroup";


function ProductActions({

    onCreate,

    onExport

}){


    return (

        <ActionGroup

            className="
                pt-1
                pr-2
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


        </ActionGroup>

    );

}


export default ProductActions;