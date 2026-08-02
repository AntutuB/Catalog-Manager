import { useEffect, useState } from "react";


const initialState = {

    name:"",
    brand:"",
    categoryId:"",
    type:"",
    price:"",
    description:""

};


function useProductForm(editingProduct, onAdd, onEdit, cancelEdit){


    const [form,setForm] = useState(initialState);

    const [imagePreview,setImagePreview] = useState(null);



    useEffect(()=>{


        if(editingProduct){


            setForm({

                name: editingProduct.name || "",
                brand: editingProduct.brand || "",
                categoryId: editingProduct.categoryId || "",
                type: editingProduct.type || "",
                price: editingProduct.price || "",
                description: editingProduct.description || "",
                image: editingProduct.image || null

            });



            if(editingProduct.image){

                setImagePreview(
                    URL.createObjectURL(
                        editingProduct.image
                    )
                );

            }

        }


    },[editingProduct]);



    function handleChange(e){

        const {
            name,
            value
        } = e.target;

        setForm({

            ...form,

            [name]:
                name === "categoryId"
                    ? Number(value)
                    : value

        });

    }



    function handleImageChange(e){


        const file = e.target.files[0];


        if(!file) return;


        setForm({

            ...form,

            image:file

        });


        setImagePreview(
            URL.createObjectURL(file)
        );

    }



    async function handleSubmit(e){


        e.preventDefault();


        if(!form.name.trim()) return;



        const productData = {

            ...form,

            price:Number(form.price)

        };



        if(editingProduct){


            await onEdit(

                editingProduct.id,

                {
                    ...productData,
                    updatedAt:new Date()
                }

            );


            cancelEdit();


        }else{


            await onAdd({

                ...productData,

                createdAt:new Date()

            });


        }



        setForm(initialState);

        setImagePreview(null);


    }



    return {

        form,

        imagePreview,

        handleChange,

        handleImageChange,

        handleSubmit

    };

}


export default useProductForm;
