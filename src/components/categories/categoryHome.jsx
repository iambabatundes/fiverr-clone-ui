import React from "react";
import CategoriesNavbar from "./categoriesNavbar";
import { Route, Routes } from "react-router-dom";
import GraphicDesign from "./graphicsDesign/grahicsDesign";
import Graphic from "./graphicsDesign/grahicsDesign";

function CategoryHome() {
  return (
    <section>
      {/* <CategoriesNavbar />
      <Routes>
        <Route path="/categories/graphics" element={<Graphic />} />
      </Routes> */}
    </section>
  );
}

export default CategoryHome;
