import { X } from "lucide-react";


function Modal({

    children,

    isOpen,

    onClose,

    title,

    className = ""

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
                bg-black/50
                p-4
            "

            onClick={onClose}

        >


            <div

                onClick={(e)=>e.stopPropagation()}

                className={`
                    w-full
                    max-w-lg
                    max-h-[90vh]
                    overflow-y-auto
                    rounded-xl
                    bg-white
                    shadow-xl
                    ${className}
                `}

            >


                <div
                    className="
                        flex
                        items-center
                        justify-between
                        border-b
                        border-[#E7E5E1]
                        px-6
                        py-5
                    "
                >

                    <h2
                        className="
                            text-xl
                            font-semibold
                            text-[#1C1B1A]
                        "
                    >

                        {title}

                    </h2>


                    <button

                        onClick={onClose}

                        className="
                            rounded-lg
                            p-2
                            text-[#6B6862]
                            transition-colors
                            hover:bg-[#F5F3EF]
                        "

                    >

                        <X size={18}/>

                    </button>

                </div>



                <div
                    className="
                        p-6
                    "
                >

                    {children}

                </div>


            </div>


        </div>

    );

}


export default Modal;