import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";


import Home from "../features/catalog/pages/Home";
import Products from "../features/products/pages/Products";
import Editor from "../features/editor/pages/Editor";
import CatalogPreview from "../features/catalog-preview/components/CatalogPreview";
import PdfCatalogPreview from "../pages/PdfCatalogPreview";
import MainLayout from "../layouts/MainLayout";


function AppRouter(){


    return (

        <BrowserRouter>

            <Routes>


<Route element={<MainLayout />}>

    <Route
        path="/"
        element={<Home />}
    />


    <Route
        path="/products"
        element={<Products />}
    />


    <Route
        path="/catalog-preview"
        element={<CatalogPreview />}
    />


    <Route
        path="/editor"
        element={<Editor />}
    />


    <Route
        path="/pdf-preview"
        element={<PdfCatalogPreview />}
    />


</Route>


</Routes>

        </BrowserRouter>

    );

}


export default AppRouter;