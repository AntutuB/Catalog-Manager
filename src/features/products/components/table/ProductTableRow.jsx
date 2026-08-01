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
                    py-5
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
                    py-5
                "
            >

                {
                    product.imageUrl && (

                        <div
                            className="
                                flex
                                h-20
                                w-20
                                items-center
                                justify-center
                                overflow-hidden
                                rounded-lg
                                border
                                border-[#E7E5E1]
                                bg-[#FAF9F7]
                            "
                        >

                            <img

                                src={product.imageUrl}

                                alt={product.name}

                                className="
                                    max-h-full
                                    max-w-full
                                    object-contain
                                "

                            />

                        </div>

                    )
                }

            </td>



            <td
                className="
                    px-6
                    py-5
                "
            >

                <div className="space-y-1">

                    <div
                        className="
                            truncate
                            font-medium
                            text-[#1C1B1A]
                        "
                    >

                        {product.name}

                    </div>


                    <div
                        className="
                            text-sm
                            text-[#6B6862]
                        "
                    >

                        {product.brand}

                    </div>


                    {
                        product.categoryName && (

                            <div
                                className="
                                    text-xs
                                    text-[#9A958C]
                                "
                            >

                                {product.categoryName}

                            </div>

                        )
                    }

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
                "
            >

                <ProductActions

                    product={product}

                    onEdit={onEdit}

                    onDelete={onDelete}

                    onExportStory={onExportStory}

                />

            </td>


        </tr>

    );

}


export default ProductTableRow;
