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


    const cards = [

        {
            label:"Productos",
            value:products.length
        },

        {
            label:"Categorías",
            value:categories.length
        },

        {
            label:"Actualización",
            value:lastUpdate
        }

    ];



    return (

        <div
            className="
                flex
                flex-wrap
                gap-3
            "
        >

            {
                cards.map(card => (

                    <div
                        key={card.label}
                        className="
                            flex
                            h-11
                            items-center
                            gap-2
                            rounded-xl
                            border
                            border-[#E7E5E1]
                            bg-white
                            px-4
                        "
                    >

                        <span
                            className="
                                text-sm
                                text-[#6B6862]
                            "
                        >

                            {card.label}

                        </span>


                        <span
                            className="
                                text-sm
                                font-semibold
                                text-[#1C1B1A]
                            "
                        >

                            {card.value}

                        </span>


                    </div>

                ))
            }


        </div>

    );

}


export default ProductStats;