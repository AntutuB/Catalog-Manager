import { Search } from "lucide-react";
import Input from "../../../../components/ui/Input";


function OthersServicesSearch({

    search,

    setSearch

}){


    return (

        <div
            className="
                relative
                w-full
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


            <Input

                type="text"

                placeholder="Buscar..."

                value={search}

                onChange={(e)=>
                    setSearch(e.target.value)
                }

                className="
                    pl-10
                "

            />

        </div>

    );

}


export default OthersServicesSearch;