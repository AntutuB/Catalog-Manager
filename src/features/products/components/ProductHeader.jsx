import ProductStats from "./header/ProductStats";
import ProductActions from "./header/ProductActions";


function ProductHeader({

    onCreate,

    onExport

}){


    return (

        <div
            className="
                mb-8
                flex
                flex-col
                gap-6
                lg:flex-row
                lg:items-end
                lg:justify-between
            "
        >

            <ProductStats />


            <ProductActions

                onCreate={onCreate}

                onExport={onExport}

            />

        </div>

    );

}


export default ProductHeader;
