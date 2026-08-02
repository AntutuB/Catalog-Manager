import CategoryActions from "./CategoryActions";


function CategoryTableRow({

    category,

    onEdit,

    onDelete

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
                    text-sm
                    font-medium
                    text-[#1C1B1A]
                "

            >

                {category.name}

            </td>



            <td

                className="
                    px-6
                    py-5
                    text-sm
                    text-[#6B6862]
                "

            >

                {
                    category.description
                        ? category.description
                        : "-"
                }

            </td>



            <td

                className="
                    px-6
                    py-5
                    text-left
                "

            >

                <CategoryActions

                    category={category}

                    onEdit={onEdit}

                    onDelete={onDelete}

                />

            </td>


        </tr>

    );

}


export default CategoryTableRow;