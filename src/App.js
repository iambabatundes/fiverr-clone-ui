import "./App.css";
import "./fonts/MacanPanWeb-Bold.ttf";
import "./fonts/MacanPanWeb-Extrabold.ttf";
import "./fonts/MacanPanWeb-Medium.ttf";
import Home from "./pages/home";

import CategoriesNavbar from "./components/categories/categoriesNavbar";
import CategoryHome from "./components/categories/categoryHome";
import { Routes, Route, useLocation } from "react-router-dom";
import GraphicsDesign from "./components/categories/graphicsDesign/grahicsDesign";
import Footer from "./components/footer/footer";
import UserNavbar from "./components/user/userNavbar";
import UserHome from "./pages/UserHome";

function App() {
  const location = useLocation();

  const isCategoryRoute = location.pathname.startsWith("/categories");

  return (
    <>
      {/* <UserHome /> */}
      {isCategoryRoute && <CategoriesNavbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoryHome />} />
        <Route
          path="/categories/graphics-design"
          element={<GraphicsDesign />}
        />
      </Routes>

      {isCategoryRoute && <Footer />}
    </>
  );
}

export default App;
