import Modal from "../../../components/ui/Modal";
import Button from "../../../components/ui/Button";

import ProductForm from "./ProductForm";


function ProductModal({

    isOpen,

    onClose,

    categories,

    onAdd,

    onEdit,

    editingProduct,

    cancelEdit

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

                cancelEdit={() => {

                    cancelEdit();

                    onClose();

                }}

            />


            <div
                className="
                    mt-6
                    flex
                    justify-end
                    gap-3
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


            </div>


        </Modal>

    );

}


export default ProductModal;