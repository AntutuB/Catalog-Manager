import { useEffect, useState } from "react";


function ProductForm({
  categories,
  onAdd,
  onEdit,
  editingProduct,
  cancelEdit
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
  const [imagePreview, setImagePreview] = useState(null);

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
        URL.createObjectURL(editingProduct.image)
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

      [name]:value

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


}
else{


  await onAdd({

    ...productData,

    createdAt:new Date()

  });


}


setForm(initialState);

setImagePreview(null);


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

      <input

  type="file"

  accept="image/*"

  onChange={handleImageChange}

/>


{
  imagePreview &&

  <img

    src={imagePreview}

    width="150"

  />

}



      <button type="submit">

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