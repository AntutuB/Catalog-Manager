import OthersServicesTable from "../components/OthersServicesTable";
import OthersServicesModal from "../components/OthersServicesModal";

import { useOthersServices } from "../hooks/useOthersServices";
import useOthersServicesModal from "../hooks/useOthersServicesModal";

import ConfirmModal from "../../../components/ui/ConfirmModal";
import useConfirmModal from "../../../hooks/useConfirmModal";


function OthersServices(){


    const {

        othersServices,

        addOthersService,

        editOthersService,

        removeOthersService

    } = useOthersServices();



    const {

        isModalOpen,

        editingItem,

        openCreate,

        openEdit,

        closeModal

    } = useOthersServicesModal();



    const {

        isOpen: confirmOpen,

        config: confirmConfig,

        openConfirm,

        closeConfirm

    } = useConfirmModal();



    function handleDeleteOthersService(id){

        openConfirm({

            title:"Eliminar servicio",

            message:
                "Esta acción no se puede deshacer.",

            onConfirm(){

                removeOthersService(id);

                closeConfirm();

            }

        });

    }



    return (

        <div
            className="
                flex
                h-full
                min-h-0
                flex-col
            "
        >

            <OthersServicesTable

                othersServices={othersServices}

                onCreate={openCreate}

                onEdit={openEdit}

                onDelete={handleDeleteOthersService}

            />



            <OthersServicesModal

                isOpen={isModalOpen}

                onClose={closeModal}

                onAdd={addOthersService}

                onEdit={editOthersService}

                editingItem={editingItem}

            />



            <ConfirmModal

                isOpen={confirmOpen}

                title={confirmConfig?.title}

                message={confirmConfig?.message}

                onCancel={closeConfirm}

                onConfirm={confirmConfig?.onConfirm}

            />

        </div>

    );

}


export default OthersServices;