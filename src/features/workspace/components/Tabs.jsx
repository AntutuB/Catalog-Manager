import { useState } from "react";

import ProductTable from "../../products/components/ProductTable";
import CategoryList from "../../categories/components/CategoryList";

function Tabs() {

    const [tab, setTab] = useState("products");

    return (

        <div>

            <div className="border-b bg-white px-8">

                <button
                    onClick={() => setTab("products")}
                    className={`mr-8 py-4 ${
                        tab === "products"
                            ? <ProductTable />
                            : <CategoryList />
                    }`}
                >
                    Productos
                </button>

                <button
                    onClick={() => setTab("categories")}
                    className={`py-4 ${
                        tab === "categories"
                            ? "border-b-2 border-blue-600 font-semibold"
                            : ""
                    }`}
                >
                    Categorías
                </button>

            </div>

            <div className="p-8">

                {tab === "products"
                    ? <div>PRODUCT TABLE</div>
                    : <div>CATEGORY TABLE</div>
                }

            </div>

        </div>

    );

}

export default Tabs;