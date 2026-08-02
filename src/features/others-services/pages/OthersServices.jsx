import OthersServicesTable from "../components/OthersServicesTable";
import OthersServicesModal from "../components/OthersServicesModal";

import { useOthersServices } from "../hooks/useOthersServices";
import useOthersServicesModal from "../hooks/useOthersServicesModal";


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

                onDelete={removeOthersService}

            />


            <OthersServicesModal

                isOpen={isModalOpen}

                onClose={closeModal}

                onAdd={addOthersService}

                onEdit={editOthersService}

                editingItem={editingItem}

            />

        </div>

    );

}


export default OthersServices;