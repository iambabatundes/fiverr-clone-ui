import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";

import FooterDown from "./footerDown";

function Footer() {
  return (
    <footer>
      <hr className="footer-line" />
      <section className="footer-container">
        <div className="footer-section">
          <h3>Categories</h3>
          <ul>
            <NavLink className="link" to="categories/graphics-design">
              <li>Graphics & Design</li>
            </NavLink>
            <NavLink className="link" to="categories/digital-marketing">
              <li>Digital Marketing</li>
            </NavLink>
            <NavLink className="link" to="categories/writing-translation">
              <li>Writing & Translation</li>
            </NavLink>

            <NavLink className="link" to="categorties/video-animation">
              <li>Video & Animation</li>
            </NavLink>

            <NavLink className="link" to="catetories/music-audio">
              <li>Music & Audio </li>
            </NavLink>

            <NavLink className="link" to="categories/programming-tech">
              <li> Programming & Tech</li>
            </NavLink>

            <NavLink className="link" to="categories/data">
              <li>Data</li>
            </NavLink>

            <NavLink className="link" to="categories/business">
              <li>Business</li>
            </NavLink>

            <NavLink className="link" to="categories/lifestyle">
              <li>Lifestyle</li>
            </NavLink>

            <NavLink className="link" to="categories/photography">
              <li>Photography</li>
            </NavLink>

            <NavLink className="link" to="categories/sitemap">
              <li>Sitemap</li>
            </NavLink>
          </ul>
        </div>

        <div className="footer-section">
          <h3>About</h3>
          <ul>
            <li>Careers</li>
            <li>Press & News</li>
            <li>Partnerships</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Intellectual Property Claims</li>
            <li>Investor Relations</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li>Help & Support</li>
            <li>Trust & Safety</li>
            <li>Selling on Fiverr</li>
            <li>Buying on Fiverr</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Community</h3>
          <ul>
            <li>Customer Success Stories</li>
            <li>Community Hub</li>
            <li>Forum</li>
            <li>Events</li>
            <li>Blog</li>
            <li>Influencers</li>
            <li>Affiliates</li>
            <li>Podcast</li>
            <li>Invite a Friend</li>
            <li>Become a Seller</li>
            <li>Community Standards</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>More From Fiverr</h3>
          <ul>
            <li>Fiverr Business</li>
            <li>Fiverr Pro</li>
            <li>Fiverr Logo Maker</li>
            <li>Fiverr Guides</li>
            <li>Get Inspired</li>
            <li>Fiverr Select</li>

            <NavLink className="link" to="categories/sitemap">
              <li>
                ClearVoice <span>Content Marketing</span>
              </li>
            </NavLink>

            <li>
              Fiverr Workspace <span>Invoice Software</span>
            </li>
            <li>
              Learn
              <span>Online Courses</span>
            </li>
            <li>Working Not Working</li>
          </ul>
        </div>
      </section>
      <hr className="line" />

      <FooterDown />
    </footer>
  );
}

export default Footer;
