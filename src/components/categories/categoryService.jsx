import React from "react";
import { NavLink } from "react-router-dom";

function CategoryService() {
  return (
    <section>
      <div className="categoryService-main">
        <ul className="categoryService">
          <NavLink to="/categories/graphic-desgin/logo-design">
            <li>Logo design</li>
          </NavLink>
          <NavLink to="/categories/graphic-desgin/minimalist-logo-design">
            <li>Minimalist logo design</li>
          </NavLink>
          <NavLink to="/categories/graphic-desgin/mascot-logo-design">
            <li>Mascot logo design</li>
          </NavLink>
          <NavLink to="/categories/graphic-desgin/3d-logo-design">
            <li>3d logo design</li>
          </NavLink>
          <NavLink to="/categories/graphic-desgin/3d-logo-design">
            <li>Hand drawn logo design</li>
          </NavLink>
          <NavLink to="/categories/graphic-desgin/vintage-logo-design">
            <li>Vintage logo design</li>
          </NavLink>
          <NavLink to="/categories/graphic-desgin/vintage-logo-design">
            <li>Remove background</li>
          </NavLink>
          <NavLink to="/categories/graphic-desgin/vintage-logo-design">
            <li>Photo restoration</li>
          </NavLink>
          <NavLink to="/categories/graphic-desgin/vintage-logo-design">
            <li>Photo retouching</li>
          </NavLink>
          <NavLink to="/categories/graphic-desgin/vintage-logo-design">
            <li>Image resize</li>
          </NavLink>
          <NavLink to="/categories/graphic-desgin/vintage-logo-design">
            <li>Product label design</li>
          </NavLink>
          <NavLink to="/categories/graphic-desgin/vintage-logo-design">
            <li>Custom twitch overlay</li>
          </NavLink>
          <NavLink to="/categories/graphic-desgin/vintage-logo-design">
            <li>Custom twitch emotes</li>
          </NavLink>
          <NavLink to="/categories/graphic-desgin/vintage-logo-design">
            <li>Children book illustration</li>
          </NavLink>
          <NavLink to="/categories/graphic-desgin/instagram-design">
            <li>Instagram design</li>
          </NavLink>
          <NavLink to="/categories/graphic-desgin/movie-poster-design">
            <li>Movie poster design</li>
          </NavLink>
          <NavLink to="/categories/graphic-desgin/industrial-product-Design">
            <li>Industrial & Product Design</li>
          </NavLink>
          <NavLink to="/categories/graphic-desgin/industrial-product-Design">
            <li>3D Modeling & Rendering</li>
          </NavLink>
          <NavLink to="/categories/graphic-desgin/industrial-product-Design">
            <li>Design for Manufacturing</li>
          </NavLink>
          <NavLink to="/categories/graphic-desgin/industrial-product-Design">
            <li>Website Design</li>
          </NavLink>
        </ul>
      </div>
    </section>
  );
}

export default CategoryService;
