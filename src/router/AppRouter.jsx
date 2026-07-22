import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../features/catalog/pages/Home";

function AppRouter() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default AppRouter;