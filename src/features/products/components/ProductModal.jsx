import ProductForm from "./ProductForm";


function ProductModal({

    isOpen,

    onClose,

    categories,

    onAdd,

    onEdit,

    editingProduct,

    cancelEdit

}) {


    if(!isOpen){

        return null;

    }



    return (

        <div

            style={{

                position:"fixed",

                top:0,

                left:0,

                width:"100%",

                height:"100%",

                background:"rgba(0,0,0,0.5)",

                display:"flex",

                justifyContent:"center",

                alignItems:"center",

                zIndex:1000

            }}

        >


            <div

                style={{

                    background:"#fff",

                    padding:"24px",

                    width:"500px",

                    maxHeight:"90vh",

                    overflowY:"auto"

                }}

            >


                <h2>

                    {

                        editingProduct

                        ?

                        "Editar producto"

                        :

                        "Nuevo producto"

                    }

                </h2>



                <ProductForm

                    categories={categories}

                    onAdd={onAdd}

                    onEdit={onEdit}

                    editingProduct={editingProduct}

                    cancelEdit={()=>{

                        cancelEdit();

                        onClose();

                    }}

                />



                <button

                    onClick={onClose}

                >

                    Cancelar

                </button>



            </div>


        </div>

    );

}


export default ProductModal;