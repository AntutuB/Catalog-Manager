import { useRef, useState } from "react";


export default function useToast(){

    const [toast,setToast] = useState(null);

    const timeoutRef = useRef(null);



    function showToast({

        type = "success",

        message

    }){


        setToast({

            type,

            message

        });



        if(timeoutRef.current){

            clearTimeout(timeoutRef.current);

        }



        timeoutRef.current = setTimeout(()=>{

            setToast(null);

        },3000);


    }



    function clearToast(){

        setToast(null);


        if(timeoutRef.current){

            clearTimeout(timeoutRef.current);

        }

    }



    return {

        toast,

        showToast,

        clearToast

    };

}