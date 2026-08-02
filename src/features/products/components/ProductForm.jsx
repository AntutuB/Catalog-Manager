import ProductFields from "./form/ProductFields";
import useProductForm from "../hooks/useProductForm";
import ActionGroup from "../../../components/ui/ActionGroup";
import Button from "../../../components/ui/Button";


function ProductForm({

    categories,

    onAdd,

    onEdit,

    editingProduct,

    cancelEdit,

    onClose

}){


    const {

        form,

        imagePreview,

        handleChange,

        handleImageChange,

        handleSubmit

    } = useProductForm(

        editingProduct,

        onAdd,

        onEdit,

        cancelEdit

    );



    return (

        <form

            id="product-form"

            onSubmit={handleSubmit}

        >


            <ProductFields

                form={form}

                categories={categories}

                imagePreview={imagePreview}

                handleChange={handleChange}

                handleImageChange={handleImageChange}

            />



            <ActionGroup

                className="
                    mt-6
                "

            >

                <Button

                    type="button"

                    variant="secondary"

                    onClick={onClose}

                >

                    Cancelar

                </Button>



                <Button

                    type="submit"

                >

                    {

                        editingProduct

                        ? "Actualizar producto"

                        : "Crear producto"

                    }

                </Button>


            </ActionGroup>


        </form>

    );

}


export default ProductForm;