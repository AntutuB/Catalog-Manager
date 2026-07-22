import { useState } from "react";


function ProductForm({
  categories,
  onAdd
}) {


  const initialState = {

    name:"",
    brand:"",
    categoryId:"",
    type:"",
    price:"",
    description:""

  };


  const [form, setForm] = useState(initialState);



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


    await onAdd({

      ...form,

      price:Number(form.price),

      createdAt:new Date()

    });


    setForm(initialState);

  }



  return (

    <form onSubmit={handleSubmit}>


      <input

        name="name"

        placeholder="Nombre del modelo"

        value={form.name}

        onChange={handleChange}

      />



      <input

        name="brand"

        placeholder="Marca"

        value={form.brand}

        onChange={handleChange}

      />



      <select

        name="categoryId"

        value={form.categoryId}

        onChange={handleChange}

      >

        <option value="">
          Seleccionar categoría
        </option>


        {
          categories.map(category=>(

            <option
              key={category.id}
              value={category.id}
            >

              {category.name}

            </option>

          ))
        }


      </select>




      <input

        name="type"

        placeholder="Tipo de espejuelo"

        value={form.type}

        onChange={handleChange}

      />



      <input

        name="price"

        type="number"

        placeholder="Precio"

        value={form.price}

        onChange={handleChange}

      />



      <textarea

        name="description"

        placeholder="Descripción"

        value={form.description}

        onChange={handleChange}

      />



      <button type="submit">

        Crear producto

      </button>



    </form>

  );

}


export default ProductForm;