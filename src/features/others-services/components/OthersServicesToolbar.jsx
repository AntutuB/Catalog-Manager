import OthersServicesSearch from "./filters/OthersServicesSearch";


function OthersServicesToolbar({

    search,

    setSearch,

    onCreate

}){


    return (

        <div
            className="
                mb-4
                flex
                items-center
                justify-between
                gap-4
            "
        >

            <div
                className="
                    flex-1
                "
            >

                <OthersServicesSearch

                    search={search}

                    setSearch={setSearch}

                />

            </div>



            <button

                onClick={onCreate}

                className="
                    h-11
                    rounded-xl
                    bg-[#1C1B1A]
                    px-5
                    text-sm
                    font-medium
                    text-white
                "

            >

                Nuevo

            </button>


        </div>

    );

}


export default OthersServicesToolbar;