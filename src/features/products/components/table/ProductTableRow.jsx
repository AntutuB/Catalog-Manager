import ProductActions from "../ProductActions";


function ProductTableRow({

    product,

    selected,

    onSelect,

    onEdit,

    onDelete,

    onExportStory

}){


    return (

        <tr

            className="
                border-b
                border-[#F1EFEB]
                transition-colors
                hover:bg-[#FAF9F7]
            "

        >


            <td
                className="
                    px-6
                "
            >

                <input

                    type="checkbox"

                    checked={selected}

                    onChange={onSelect}

                />

            </td>



            <td
                className="
                    px-6
                "
            >

                {
                    product.imageUrl && (

                        <img

                            src={product.imageUrl}

                            alt={product.name}

                            className="
                                h-20
                                w-20
                                rounded-lg
                                object-contain
                            "

                        />

                    )
                }

            </td>



            <td
                className="
                    px-6
                    py-5
                "
            >

                <div
                    className="
                        font-medium
                        text-[#1C1B1A]
                    "
                >

                    {product.name}

                </div>


            </td>



            <td
                className="
                    px-6
                    py-5
                    text-sm
                    text-[#6B6862]
                "
            >

                {product.categoryName || "-"}

            </td>



            <td
                className="
                    px-6
                    py-5
                    text-sm
                    text-[#6B6862]
                "
            >

                {product.brand}

            </td>



            <td
                className="
                    px-6
                    py-5
                "
            >

                <span
                    className="
                        inline-flex
                        rounded-full
                        bg-[#F1EFEB]
                        px-3
                        py-1
                        text-xs
                        font-medium
                        text-[#6B6862]
                    "
                >

                    {product.type}

                </span>

            </td>



            <td
                className="
                    px-6
                    py-5
                    font-medium
                    text-[#1C1B1A]
                "
            >

                ${product.price}

            </td>



            <td
                className="
                    px-6
                    py-5
                    text-left
                "
            >

                <div
                    className="
                        flex
                        justify-start
                    "
                >

                    <ProductActions

                        product={product}

                        onEdit={onEdit}

                        onDelete={onDelete}

                        onExportStory={onExportStory}

                    />

                </div>

            </td>


        </tr>

    );

}


export default ProductTableRow;