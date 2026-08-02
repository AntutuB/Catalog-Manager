import { useEffect, useState } from "react";


const initialState = {

    name:"",

    description:""

};


function CategoryForm({

    onAdd,

    onEdit,

    editingCategory,

    onClose

}){


    const [

        form,

        setForm

    ] = useState(initialState);



    useEffect(()=>{

        if(editingCategory){

            setForm({

                name:
                    editingCategory.name || "",

                description:
                    editingCategory.description || ""

            });

        }else{

            setForm(initialState);

        }

    },[
        editingCategory
    ]);



    function handleChange(e){

        const {

            name,

            value

        } = e.target;


        setForm({

            ...form,

            [name]:value

        });

    }



    async function handleSubmit(e){

        e.preventDefault();


        if(!form.name.trim()) return;



        if(editingCategory){


            await onEdit(

                editingCategory.id,

                {

                    name:
                        form.name.trim(),

                    description:
                        form.description.trim()

                }

            );


        }else{


            await onAdd({

                name:
                    form.name.trim(),

                description:
                    form.description.trim()

            });


        }



        setForm(initialState);

        onClose();

    }



    return (

        <form

            id="category-form"

            onSubmit={handleSubmit}

            className="
                space-y-4
            "

        >

            <input

                name="name"

                type="text"

                placeholder="Nombre de categoría"

                value={form.name}

                onChange={handleChange}

                className="
                    h-11
                    w-full
                    rounded-xl
                    border
                    border-[#E7E5E1]
                    px-4
                "

            />


            <textarea

                name="description"

                placeholder="Descripción"

                value={form.description}

                onChange={handleChange}

                className="
                    min-h-28
                    w-full
                    rounded-xl
                    border
                    border-[#E7E5E1]
                    px-4
                    py-3
                    text-sm
                    resize-none
                "

            />


        </form>

    );

}


export default CategoryForm;