import {
    Pencil,
    Trash2
} from "lucide-react";


function OthersServicesActions({

    item,

    onEdit,

    onDelete

}){


    return (

        <div

            className="
                flex
                items-center
                gap-2
            "

        >


            <button

                type="button"

                onClick={()=>onEdit(item)}

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
                "

            >

                <Pencil size={16}/>

            </button>



            <button

                type="button"

                onClick={()=>onDelete(item.id)}

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
                "

            >

                <Trash2 size={16}/>

            </button>


        </div>

    );

}


export default OthersServicesActions;