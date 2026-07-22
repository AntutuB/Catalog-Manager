import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../features/catalog/pages/Home";
import Categories from "../features/categories/pages/Categories";
import Products from "../features/products/pages/Products";


function AppRouter() {

  return (

    <BrowserRouter>

      <MainLayout>

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/categories"
            element={<Categories />}
          />

          <Route

            path="/products"

            element={<Products />}

          />

        </Routes>

      </MainLayout>

    </BrowserRouter>

  );

}


export default AppRouter;