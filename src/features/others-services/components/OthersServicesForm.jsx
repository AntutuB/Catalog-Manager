import { useEffect, useState } from "react";


const initialState = {

    name:"",

    price:""

};



function OthersServicesForm({

    onAdd,

    onEdit,

    editingItem,

    onClose

}){


    const [

        form,

        setForm

    ] = useState(initialState);



    useEffect(()=>{

        if(editingItem){

            setForm({

                name:
                    editingItem.name || "",

                price:
                    editingItem.price || ""

            });

        }else{

            setForm(initialState);

        }

    },[
        editingItem
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



        const data = {

            name:
                form.name.trim(),

            price:
                Number(form.price)

        };



        if(editingItem){


            await onEdit(

                editingItem.id,

                data

            );


        }else{


            await onAdd(data);


        }



        setForm(initialState);

        onClose();

    }



    return (

        <form

            id="others-services-form"

            onSubmit={handleSubmit}

            className="
                space-y-4
            "

        >

            <input

                name="name"

                placeholder="Nombre"

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



            <input

                name="price"

                type="number"

                placeholder="Precio"

                value={form.price}

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


        </form>

    );

}


export default OthersServicesForm;