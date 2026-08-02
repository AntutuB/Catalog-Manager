import { useState } from "react";


function useConfirmModal(){


    const [isOpen, setIsOpen] = useState(false);

    const [config, setConfig] = useState(null);



    function openConfirm(options){

        setConfig(options);

        setIsOpen(true);

    }



    function closeConfirm(){

        setIsOpen(false);

        setConfig(null);

    }



    return {

        isOpen,

        config,

        openConfirm,

        closeConfirm

    };

}


export default useConfirmModal;