import { useProducts } from "../../hooks/useProducts";
import { useCategories } from "../../../categories/hooks/useCategories";


function ProductStats(){

    const {
        products
    } = useProducts();


    const {
        categories
    } = useCategories();


    const lastUpdate = new Date()
        .toLocaleDateString(
            "es-ES"
        );


    const stats = [
        {
            label:"Total de productos",
            value:products.length
        },
        {
            label:"Categorías",
            value:categories.length
        },
        {
            label:"Última actualización",
            value:lastUpdate
        }
    ];


    return (

        <div
            className="
                grid
                grid-cols-1
                gap-3
                sm:grid-cols-3
            "
        >

            {
                stats.map(stat => (

                    <div
                        key={stat.label}
                        className="
                            rounded-xl
                            border
                            border-[#E7E5E1]
                            bg-white
                            px-5
                            py-4
                            min-w-[180px]
                        "
                    >

                        <p
                            className="
                                text-xs
                                text-[#6B6862]
                            "
                        >

                            {stat.label}

                        </p>


                        <p
                            className="
                                mt-1
                                text-xl
                                font-semibold
                                text-[#1C1B1A]
                            "
                        >

                            {stat.value}

                        </p>


                    </div>

                ))
            }

        </div>

    );

}


export default ProductStats;