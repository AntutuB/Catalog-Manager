import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";


import Products from "../features/products/pages/Products";


function AppRouter(){

    return (

        <BrowserRouter>

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

        </BrowserRouter>

    );

}


export default AppRouter;