import Input from "../../../../components/ui/Input";
import Select from "../../../../components/ui/Select";

function ProductFields({

    form,

    categories,

    imagePreview,

    handleChange,

    handleImageChange

}){


    return (

        <>

            <Input

                name="name"

                placeholder="Nombre del modelo"

                value={form.name}

                onChange={handleChange}

            />


            <Input

                name="brand"

                placeholder="Marca"

                value={form.brand}

                onChange={handleChange}

            />


            <Select

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


            </Select>



            <Input

                name="type"

                placeholder="Tipo de espejuelo"

                value={form.type}

                onChange={handleChange}

            />



            <Input

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
                imagePreview && (

                    <img

                        src={imagePreview}

                        width="150"

                        alt="preview"

                    />

                )
            }


        </>

    );

}


export default ProductFields;
