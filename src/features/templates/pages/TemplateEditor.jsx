import { useState } from "react";

import TemplateLoader from "../../../templates/loader/TemplateLoader";

import TemplateRenderer from "../../../templates/components/TemplateRenderer";

import { useProducts } from "../../products/hooks/useProducts";



function TemplateEditor() {


    const [template] = useState(

        () => TemplateLoader.load("instagram-story")

    );


    const {

        products

    } = useProducts();



    const [

        selectedProduct,

        setSelectedProduct

    ] = useState(null);



    function handleProductChange(e){


        const productId = Number(e.target.value);


        const product = products.find(

            item => item.id === productId

        );


        setSelectedProduct(product || null);


    }



    return (

        <section>


            <h2>

                {template.name}

            </h2>



            <div>


                <label>

                    Seleccionar producto:

                </label>



                <select

                    onChange={handleProductChange}

                    defaultValue=""

                >

                    <option value="">

                        Seleccionar

                    </option>



                    {

                        products.map(product=>(

                            <option

                                key={product.id}

                                value={product.id}

                            >

                                {product.name}

                            </option>

                        ))

                    }


                </select>


            </div>



            <div

                style={{

                    display:"flex",

                    justifyContent:"center",

                    transform:"scale(0.35)",

                    transformOrigin:"top center",

                    marginTop:"30px"

                }}

            >


                <TemplateRenderer

                    template={template}

                    product={selectedProduct}

                />


            </div>


        </section>

    );


}



export default TemplateEditor;