import { useEffect, useState } from "react";


import {
    getOthersServices,
    createOthersService,
    updateOthersService,
    deleteOthersService
} from "../services/othersServicesService";



export function useOthersServices(){


    const [

        othersServices,

        setOthersServices

    ] = useState([]);



    async function loadOthersServices(){

        const data = await getOthersServices();

        setOthersServices(data);

    }



     async function addOthersService(data){

        await createOthersService({

            ...data,

            category:"Servicios y Otros",

            createdAt:new Date()

        });


        await loadOthersServices();

    }



    async function editOthersService(id,data){

        await updateOthersService(

            id,

            data

        );


        await loadOthersServices();

    }



    async function removeOthersService(id){

        await deleteOthersService(id);


        await loadOthersServices();

    }



    useEffect(()=>{

        loadOthersServices();

    },[]);



    return {

        othersServices,

        addOthersService,

        editOthersService,

        removeOthersService

    };

}