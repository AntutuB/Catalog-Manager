import { useRef, useState } from "react";

import TemplateLoader from "../../../templates/loader/TemplateLoader";

import PreviewRenderer from "../../../templates/components/PreviewRenderer";
import ExportRenderer from "../../../templates/components/ExportRenderer";

import { useProducts } from "../../products/hooks/useProducts";

import { ImageExporter } from "../../../exporter";

function TemplateEditor() {

    const exportRef = useRef(null);

    const [template] = useState(
        () => TemplateLoader.load("instagram-story")
    );

    const { products } = useProducts();

    const [
        selectedProduct,
        setSelectedProduct
    ] = useState(null);

    function handleProductChange(e){

        const id = Number(e.target.value);

        setSelectedProduct(

            products.find(

                product => product.id === id

            ) || null

        );

    }

    async function handleExport(){

        if(!selectedProduct){

            alert("Selecciona un producto.");

            return;

        }

        await ImageExporter.exportPNG(

            exportRef.current,

            selectedProduct.name

        );

    }

    return (

        <section>

            <h2>

                {template.name}

            </h2>

            <div
                style={{
                    display:"flex",
                    gap:12,
                    alignItems:"center",
                    marginBottom:20
                }}
            >

                <select
                    defaultValue=""
                    onChange={handleProductChange}
                >

                    <option value="">
                        Seleccionar producto
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

                <button
                    onClick={handleExport}
                    disabled={!selectedProduct}
                >

                    Exportar PNG

                </button>

            </div>

            <PreviewRenderer

                template={template}

                product={selectedProduct}

            />

            <ExportRenderer

                ref={exportRef}

                template={template}

                product={selectedProduct}

            />

        </section>

    );

}

export default TemplateEditor;