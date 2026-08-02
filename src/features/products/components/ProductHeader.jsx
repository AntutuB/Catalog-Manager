import ProductStats from "./header/ProductStats";
import ProductActions from "./header/ProductActions";

function ProductHeader({

    onCreate,

    onExport

}){

    return (

        <div
            className="
                mb-6
                flex
                items-start
                justify-between
                gap-8
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