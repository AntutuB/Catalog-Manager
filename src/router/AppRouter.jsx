import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";


import Home from "../features/catalog/pages/Home";
import Products from "../features/products/pages/Products";
import Editor from "../features/editor/pages/Editor";



function AppRouter(){


    return (

        <BrowserRouter>

            <Routes>


                <Route

                    path="/"

                    element={<Home />}

                />


                <Route

                    path="/products"

                    element={<Products />}

                />


                <Route

                    path="/editor"

                    element={<Editor />}

                />


            </Routes>

        </BrowserRouter>

    );

}


export default AppRouter;