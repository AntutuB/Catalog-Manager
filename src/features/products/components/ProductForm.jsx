import ProductFields from "./form/ProductFields";

import useProductForm from "../hooks/useProductForm";


function ProductForm({

    categories,

    onAdd,

    onEdit,

    editingProduct,

    cancelEdit

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

            onSubmit={handleSubmit}

        >


            <ProductFields

                form={form}

                categories={categories}

                imagePreview={imagePreview}

                handleChange={handleChange}

                handleImageChange={handleImageChange}

            />



            <button

                type="submit"

            >

                {
                    editingProduct

                    ?

                    "Actualizar producto"

                    :

                    "Crear producto"
                }


            </button>



        </form>

    );

}


export default ProductForm;
