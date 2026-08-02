import {
    HashRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";


import Products from "../features/products/pages/Products";


function AppRouter(){

    return (

        <HashRouter>

            <Routes>

                <Route

                    path="/"

                    element={

                        <Navigate

                            to="/products"

                            replace

                        />

                    }

                />


                <Route

                    path="/products"

                    element={

                        <Products />

                    }

                />

            </Routes>

        </HashRouter>

    );

}


export default AppRouter;