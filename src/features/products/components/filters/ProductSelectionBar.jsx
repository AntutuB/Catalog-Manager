import Surface from "../../../../components/ui/Surface";
import ActionGroup from "../../../../components/ui/ActionGroup";

function ProductSelectionBar({

    selectedCount,

    onDeleteSelected,

    onClearSelection

}){


    if(selectedCount === 0){

        return null;

    }



    return (

        <Surface

            className="
                flex
                items-center
                justify-between
                px-5
                py-3
            "

        >

            <span
                className="
                    text-sm
                    text-[#6B6862]
                "
            >

                {selectedCount} producto(s) seleccionado(s)

            </span>



            <ActionGroup

                align="start"

            >

                <button

                    onClick={onClearSelection}

                    className="
                        rounded-xl
                        border
                        border-[#E7E5E1]
                        px-4
                        py-2
                        text-sm
                        text-[#1C1B1A]
                        transition-colors
                        hover:bg-[#FAF9F7]
                    "

                >

                    Limpiar

                </button>



                <button

                    onClick={onDeleteSelected}

                    className="
                        rounded-xl
                        bg-red-600
                        px-4
                        py-2
                        text-sm
                        text-white
                        transition-colors
                        hover:bg-red-700
                    "

                >

                    Eliminar

                </button>


            </ActionGroup>


        </Surface>

    );

}


export default ProductSelectionBar;
