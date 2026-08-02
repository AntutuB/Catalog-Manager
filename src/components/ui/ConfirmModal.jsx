function ConfirmModal({

    isOpen,

    title,

    message,

    onConfirm,

    onCancel

}){


    if(!isOpen){

        return null;

    }



    return (

        <div

            className="
                fixed
                inset-0
                z-50
                flex
                items-center
                justify-center
                bg-black/40
                px-4
            "

        >

            <div

                className="
                    w-full
                    max-w-md
                    rounded-xl
                    bg-white
                    p-6
                    shadow-xl
                "

            >

                <h2

                    className="
                        text-lg
                        font-semibold
                        text-gray-900
                    "

                >

                    {title}

                </h2>



                <p

                    className="
                        mt-3
                        text-sm
                        text-gray-600
                    "

                >

                    {message}

                </p>




                <div

                    className="
                        mt-6
                        flex
                        justify-end
                        gap-3
                    "

                >

                    <button

                        type="button"

                        onClick={onCancel}

                        className="
                            rounded-lg
                            border
                            border-[#E7E5E1]
                            px-4
                            py-2
                            text-sm
                            text-[#6B6862]
                            hover:bg-gray-50
                        "

                    >

                        Cancelar

                    </button>




                    <button

                        type="button"

                        onClick={onConfirm}

                        className="
                            rounded-lg
                            bg-red-600
                            px-4
                            py-2
                            text-sm
                            text-white
                            hover:bg-red-700
                        "

                    >

                        Eliminar

                    </button>


                </div>


            </div>


        </div>

    );

}


export default ConfirmModal;