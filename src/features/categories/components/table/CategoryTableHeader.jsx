function CategoryTableHeader(){

    return (

        <thead

            className="
                sticky
                top-0
                z-10
                bg-[#FAF9F7]
                border-b
                border-[#E7E5E1]
            "

        >

            <tr>


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

                    Descripción

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

                    Acciones

                </th>


            </tr>


        </thead>

    );

}


export default CategoryTableHeader;