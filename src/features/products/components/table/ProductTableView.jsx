import ProductTableHeader from "./ProductTableHeader";
import ProductTableRow from "./ProductTableRow";
import Surface from "../../../../components/ui/Surface";


function ProductTableView({

    products,

    selectedProducts,

    toggleProductSelection,

    toggleAllProducts,

    onEdit,

    onDelete,

    onExportStory

}){


    const allSelected =
        products.length > 0 &&
        selectedProducts.length === products.length;



    return (

        <Surface

            className="
                flex
                h-full
                min-h-0
                flex-col
                overflow-hidden
            "

        >

            {
                products.length === 0

                ?

                (

                    <div
                        className="
                            p-10
                            text-center
                            text-gray-500
                        "
                    >

                        No hay productos registrados.

                    </div>

                )

                :

                (

                    <>

                        <div
                            className="
                                min-h-0
                                flex-1
                                overflow-y-auto
                            "
                        >

                            <table
                                className="
                                    w-full
                                    table-fixed
                                    border-collapse
                                "
                            >

                                <ProductTableHeader

                                    allSelected={allSelected}

                                    onToggleAll={toggleAllProducts}

                                />


                                <tbody>

                                    {
                                        products.map(product => (

                                            <ProductTableRow

                                                key={product.id}

                                                product={product}

                                                selected={
                                                    selectedProducts.includes(
                                                        product.id
                                                    )
                                                }

                                                onSelect={() =>
                                                    toggleProductSelection(
                                                        product.id
                                                    )
                                                }

                                                onEdit={onEdit}

                                                onDelete={onDelete}

                                                onExportStory={onExportStory}

                                            />

                                        ))
                                    }

                                </tbody>


                            </table>


                        </div>



                        <div
                            className="
                                flex
                                shrink-0
                                items-center
                                justify-between
                                border-t
                                border-[#E7E5E1]
                                px-6
                                py-3
                                text-sm
                                text-[#6B6862]
                            "
                        >

                            <span>

                                Mostrando {products.length} productos

                            </span>


                            <div
                                className="
                                    flex
                                    items-center
                                    gap-2
                                "
                            >

                                <button
                                    className="
                                        rounded-lg
                                        border
                                        border-[#E7E5E1]
                                        px-3
                                        py-1.5
                                    "
                                >

                                    Anterior

                                </button>


                                <button
                                    className="
                                        rounded-lg
                                        border
                                        border-[#E7E5E1]
                                        px-3
                                        py-1.5
                                    "
                                >

                                    Siguiente

                                </button>


                            </div>


                        </div>


                    </>

                )

            }


        </Surface>

    );

}


export default ProductTableView;