import {
    Download,
    Pencil,
    Trash2
} from "lucide-react";


function ProductActions({

    product,

    onEdit,

    onDelete,

    onExportStory

}){


    return (

        <div
            className="
                flex
                items-center
                justify-end
                gap-2
            "
        >


            <button

                type="button"

                title="Exportar PNG"

                onClick={()=>onExportStory(product)}

                className="
                    h-9
                    w-9
                    rounded-lg
                    border
                    border-gray-200
                    bg-white
                    text-gray-600
                    flex
                    items-center
                    justify-center
                    hover:bg-gray-50
                    transition
                "

            >

                <Download size={16}/>

            </button>




            <button

                type="button"

                title="Editar"

                onClick={()=>onEdit(product)}

                className="
                    h-9
                    w-9
                    rounded-lg
                    border
                    border-gray-200
                    bg-white
                    text-gray-600
                    flex
                    items-center
                    justify-center
                    hover:bg-gray-50
                    transition
                "

            >

                <Pencil size={16}/>

            </button>





            <button

                type="button"

                title="Eliminar"

                onClick={()=>onDelete(product.id)}

                className="
                    h-9
                    w-9
                    rounded-lg
                    border
                    border-red-100
                    bg-red-50
                    text-red-600
                    flex
                    items-center
                    justify-center
                    hover:bg-red-100
                    transition
                "

            >

                <Trash2 size={16}/>

            </button>


        </div>

    );

}


export default ProductActions;