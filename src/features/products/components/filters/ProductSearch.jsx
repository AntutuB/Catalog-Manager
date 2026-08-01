import { Search } from "lucide-react";


function ProductSearch({

    search,

    setSearch

}){


    return (

        <div
            className="
                relative
                w-full
                lg:w-80
            "
        >

            <Search

                size={17}

                className="
                    absolute
                    left-3.5
                    top-1/2
                    -translate-y-1/2
                    text-[#9A958C]
                "

            />


            <input

                type="text"

                placeholder="Buscar producto..."

                value={search}

                onChange={(e)=>
                    setSearch(e.target.value)
                }

                className="
                    h-11
                    w-full
                    rounded-xl
                    border
                    border-[#E7E5E1]
                    bg-white
                    pl-10
                    pr-4
                    text-sm
                    text-[#1C1B1A]
                    placeholder:text-[#9A958C]
                    outline-none
                    transition-colors
                    hover:border-[#D6D3CE]
                    focus:border-black
                    focus:ring-2
                    focus:ring-black/5
                "

            />

        </div>

    );

}


export default ProductSearch;
