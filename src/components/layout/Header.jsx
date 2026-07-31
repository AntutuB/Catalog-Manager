import { Package2 } from "lucide-react";


function Header(){

    return (

        <header
            className="
                h-16
                bg-white
                border-b
                border-gray-200
                flex
                items-center
                px-8
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

        </header>

    );

}


export default Header;