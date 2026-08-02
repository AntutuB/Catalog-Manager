import CategorySearch from "./filters/CategorySearch";


function CategoryToolbar({

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

                <CategorySearch

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
                    transition
                    hover:bg-black
                "

            >

                Nueva categoría

            </button>


        </div>

    );

}


export default CategoryToolbar;