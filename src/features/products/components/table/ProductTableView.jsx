import ProductTableHeader from "./ProductTableHeader";
import ProductTableRow from "./ProductTableRow";


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

        <div
            className="
                overflow-hidden
                rounded-xl
                border
                border-[#E7E5E1]
                bg-white
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

                )

            }


        </div>

    );

}


export default ProductTableView;
