import {
    Pencil,
    Trash2
} from "lucide-react";


function CategoryActions({

    category,

    onEdit,

    onDelete

}){


    return (

        <div
            className="
                flex
                justify-start
                gap-2
            "
        >

            <button

                type="button"

                onClick={() =>
                    onEdit(category)
                }

                className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-gray-200
                    bg-white
                    text-gray-600
                    hover:bg-gray-50
                "

            >

                <Pencil size={16}/>

            </button>



            <button

                type="button"

                onClick={() =>
                    onDelete(category.id)
                }

                className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-red-100
                    bg-red-50
                    text-red-600
                    hover:bg-red-100
                "

            >

                <Trash2 size={16}/>

            </button>


        </div>

    );

}


export default CategoryActions;