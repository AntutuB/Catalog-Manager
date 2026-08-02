import OthersServicesActions from "../OthersServicesActions";


function OthersServicesTableRow({

    item,

    onEdit,

    onDelete

}){


    return (

        <tr

            className="
                border-b
                border-[#F1EFEB]
                hover:bg-[#FAF9F7]
                transition-colors
            "

        >


            <td

                className="
                    px-6
                    py-5
                    text-sm
                    text-[#6B6862]
                "

            >

                {item.id}

            </td>



            <td

                className="
                    px-6
                    py-5
                    font-medium
                    text-[#1C1B1A]
                "

            >

                {item.name}

            </td>



            <td

                className="
                    px-6
                    py-5
                    font-medium
                    text-[#1C1B1A]
                "

            >

                ${item.price}

            </td>



            <td

                className="
                    px-6
                    py-5
                "

            >

                <OthersServicesActions

                    item={item}

                    onEdit={onEdit}

                    onDelete={onDelete}

                />

            </td>


        </tr>

    );

}


export default OthersServicesTableRow;