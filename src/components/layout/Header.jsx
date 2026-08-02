import logo from "../../assets/Evotec.svg";


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

                    <img
                        src={logo}
                        alt="Logo"
                        className="
                            h-6
                            w-auto
                            object-contain
                        "
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