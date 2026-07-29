function CategoryTable({
    categories
}){


    return (

        <table>

            <thead>

                <tr>

                    <th>
                        Nombre
                    </th>

                </tr>

            </thead>


            <tbody>

                {
                    categories.map(category => (

                        <tr
                            key={category.id}
                        >

                            <td>
                                {category.name}
                            </td>

                        </tr>

                    ))
                }

            </tbody>


        </table>

    );

}


export default CategoryTable;