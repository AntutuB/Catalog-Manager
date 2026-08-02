import Modal from "../../../components/ui/Modal";
import Button from "../../../components/ui/Button";
import ActionGroup from "../../../components/ui/ActionGroup";

import OthersServicesForm from "./OthersServicesForm";


function OthersServicesModal({

    isOpen,

    onClose,

    onAdd,

    onEdit,

    editingItem

}){


    return (

        <Modal

            isOpen={isOpen}

            onClose={onClose}

            title={
                editingItem
                    ? "Editar"
                    : "Nuevo"
            }

        >


            <OthersServicesForm

                onAdd={onAdd}

                onEdit={onEdit}

                editingItem={editingItem}

                onClose={onClose}

            />



            <ActionGroup

                className="
                    mt-6
                "

            >

                <Button

                    variant="secondary"

                    onClick={onClose}

                >

                    Cancelar

                </Button>



                <Button

                    type="submit"

                    form="others-services-form"

                >

                    {
                        editingItem
                            ? "Actualizar"
                            : "Crear"
                    }

                </Button>


            </ActionGroup>


        </Modal>

    );

}


export default OthersServicesModal;