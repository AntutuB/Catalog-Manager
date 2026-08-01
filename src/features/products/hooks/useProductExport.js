import { useMemo } from "react";


function useProductExport(){

    const publicationDate = useMemo(()=>{

        return new Date()

            .toLocaleDateString(

                "es-ES",

                {
                    month:"long",
                    year:"numeric"
                }

            )

            .toUpperCase();

    },[]);



    const pdfSettings = {

        brandName:"CATÁLOGO",

        publicationDate,

        city:"HABANA, CUBA",

        description:
            "Una selección curada de monturas ópticas y de sol, fotografiadas sobre blanco puro para que cada silueta se sostenga por sí sola."

    };


    return {

        pdfSettings

    };

}


export default useProductExport;
