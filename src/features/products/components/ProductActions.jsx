import Button from "../../../components/ui/Button";


function ProductActions({

    product,

    onEdit,

    onDelete,

    onExportStory

}){


    return (

        <div className="
            flex
            items-center
            gap-2
        ">


            <Button

                variant="secondary"

                onClick={()=>onEdit(product)}

            >

                Editar

            </Button>



            <Button

                variant="danger"

                onClick={()=>onDelete(product.id)}

            >

                Eliminar

            </Button>



            <Button

                variant="ghost"

                onClick={()=>onExportStory(product)}

            >

                PNG Story

            </Button>


            <Button

                variant="ghost"

            >

                PNG Post

            </Button>


        </div>

    );

}


export default ProductActions;