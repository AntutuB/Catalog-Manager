function ProductTableHeader({

    allSelected,

    onToggleAll

}){


    return (

        <thead
            className="
                border-b
                border-[#E7E5E1]
                bg-[#FAF9F7]
            "
        >

            <tr>


                <th
                    className="
                        w-16
                        px-6
                        py-5
                        text-left
                        text-xs
                        font-semibold
                        uppercase
                        tracking-wide
                        text-[#6B6862]
                    "
                >

                    <input

                        type="checkbox"

                        checked={allSelected}

                        onChange={onToggleAll}

                    />

                </th>



                <th
                    className="
                        w-32
                        px-6
                        py-5
                        text-left
                        text-xs
                        font-semibold
                        uppercase
                        tracking-wide
                        text-[#6B6862]
                    "
                >

                    Imagen

                </th>



                <th
                    className="
                        px-6
                        py-5
                        text-left
                        text-xs
                        font-semibold
                        uppercase
                        tracking-wide
                        text-[#6B6862]
                    "
                >

                    Nombre

                </th>



                <th
                    className="
                        w-40
                        px-6
                        py-5
                        text-left
                        text-xs
                        font-semibold
                        uppercase
                        tracking-wide
                        text-[#6B6862]
                    "
                >

                    Marca

                </th>



                <th
                    className="
                        w-40
                        px-6
                        py-5
                        text-left
                        text-xs
                        font-semibold
                        uppercase
                        tracking-wide
                        text-[#6B6862]
                    "
                >

                    Tipo

                </th>



                <th
                    className="
                        w-32
                        px-6
                        py-5
                        text-left
                        text-xs
                        font-semibold
                        uppercase
                        tracking-wide
                        text-[#6B6862]
                    "
                >

                    Precio

                </th>



                <th
                    className="
                        w-72
                        px-6
                        py-5
                        text-left
                        text-xs
                        font-semibold
                        uppercase
                        tracking-wide
                        text-[#6B6862]
                    "
                >

                    Acciones

                </th>


            </tr>


        </thead>

    );

}


export default ProductTableHeader;
