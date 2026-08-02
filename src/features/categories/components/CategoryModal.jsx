import Modal from "../../../components/ui/Modal";
import Button from "../../../components/ui/Button";

import CategoryForm from "./CategoryForm";
import ActionGroup from "../../../components/ui/ActionGroup";


function CategoryModal({

    isOpen,

    onClose,

    onAdd,

    onEdit,

    editingCategory

}){


    return (

        <Modal

            isOpen={isOpen}

            onClose={onClose}

            title={
                editingCategory
                    ? "Editar categoría"
                    : "Nueva categoría"
            }

        >

            <CategoryForm

                onAdd={onAdd}

                onEdit={onEdit}

                editingCategory={editingCategory}

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

                    form="category-form"

                >

                    {
                        editingCategory
                            ? "Actualizar categoría"
                            : "Crear categoría"
                    }

                </Button>


            </ActionGroup>


        </Modal>

    );

}


export default CategoryModal;