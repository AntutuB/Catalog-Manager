import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../features/catalog/pages/Home";
import Categories from "../features/categories/pages/Categories";


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

        </Routes>

      </MainLayout>

    </BrowserRouter>

  );

}


export default AppRouter;