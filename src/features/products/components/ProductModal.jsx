import Modal from "../../../components/ui/Modal";
import Button from "../../../components/ui/Button";

import ProductForm from "./ProductForm";
import ActionGroup from "../../../components/ui/ActionGroup";


function ProductModal({

    isOpen,

    onClose,

    categories,

    onAdd,

    onEdit,

    editingProduct,

    cancelEdit,

    onSuccess

}){

    return (

        <Modal

            isOpen={isOpen}

            onClose={onClose}

            title={
                editingProduct
                    ? "Editar producto"
                    : "Nuevo producto"
            }

        >

            <ProductForm

                categories={categories}

                onAdd={onAdd}

                onEdit={onEdit}

                editingProduct={editingProduct}

                cancelEdit={cancelEdit}

                onSuccess={onSuccess}

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

                    form="product-form"

                >

                    {

                        editingProduct
                            ? "Actualizar producto"
                            : "Crear producto"

                    }

                </Button>


            </ActionGroup>


        </Modal>

    );

}


export default ProductModal;