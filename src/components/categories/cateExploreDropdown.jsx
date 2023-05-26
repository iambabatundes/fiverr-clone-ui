import React from "react";
import { NavLink } from "react-router-dom";

function CateExploreDropdown({ onClick }) {
  const cateExplores = [
    {
      title: "Discover",
      subtitle: "Inspiring projects made on Fiverr",
      link: "/discover",
    },
    {
      title: "Guides",
      subtitle: "In-depth guides covering business topics",
      link: "/guide",
    },
    {
      title: "Learn",
      subtitle: "Professional online courses, led by experts",
      link: "/learn",
    },
    {
      title: "Logo Maker",
      subtitle: "Create your logo instantly",
      link: "/logo-maker",
    },
    {
      title: "Community",
      subtitle: "Community Connect with Fiverrs team and community Guides",
      link: "/community",
    },
    {
      title: "Podcast",
      subtitle: "Inside tips from top business minds",
      link: "/podcast",
    },
    {
      title: "Blog",
      subtitle: "News, information and community stories",
      link: "/blog",
    },
    {
      title: "Fiverr Workspace",
      subtitle: "One place to manage your business",
      link: "/fiverr-workspace",
    },
  ];
  return (
    <section className="cate-explore-dropdown" onClick={onClick}>
      <div className="cate-explore-container">
        {cateExplores.map((explore) => (
          <NavLink to={explore.link} className="cate-explore-link">
            <ul className="cate-explore-content">
              <li>
                <h2 className="cate-explore-title">{explore.title}</h2>
                <p className="cate-explore-subtitle">{explore.subtitle}</p>
              </li>
            </ul>
          </NavLink>
        ))}
        <ul>
          <li></li>
        </ul>
      </div>
    </section>
  );
}

export default CateExploreDropdown;
