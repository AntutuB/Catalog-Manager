import { Package2 } from "lucide-react";


function Header(){

    return (

        <header
            className="
                h-16
                w-full
                border-b
                border-gray-200
                bg-white
            "
        >

            <div
                className="
                    flex
                    h-full
                    items-center
                    px-20
                "
            >

                <div
                    className="
                        flex
                        items-center
                        gap-3
                    "
                >

                    <Package2
                        size={22}
                        className="text-gray-700"
                    />


                    <h1
                        className="
                            text-lg
                            font-semibold
                            tracking-tight
                        "
                    >

                        Catálogo de Productos

                    </h1>

                </div>

            </div>

        </header>

    );

}


export default Header;