import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useReducer, useRef } from "react";

const initialState = {
  activeMenu: "",
  activeSubMenu: "",
  isSidebarOpen: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_MENU":
      return {
        ...state,

        activeMenu: state.activeMenu === action.menu ? "" : action.menu,
        activeSubMenu:
          state.activeMenu === action.menu ? state.activeSubMenu : "",
      };
    case "TOGGLE_SUB_MENU":
      return {
        ...state,
        activeSubMenu:
          state.activeSubMenu === action.subMenu ? "" : action.subMenu,
      };
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
      };
    case "setScrollY":
      return { ...state, scrollY: action.payload };
    default:
      return state;
  }
}
function Sidebar({ isMenuOpen, toggleMenu }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const collapseMenu = (menu) => {
    dispatch({ type: "TOGGLE_MENU", menu });
  };
  const toggleSubMenu = (subMenu) => {
    dispatch({ type: "TOGGLE_SUB_MENU", subMenu });
  };
  return (
    <div className="main-nav-wrapper">
      <div className={`main-nav2 ${isMenuOpen ? "show-menu" : ""}`}>
        <div className="menu-close-btn" onClick={toggleMenu}>
          <i className="bi bi-x-lg" />
        </div>
        <div className="mobile-logo-area d-flex justify-content-start align-items-center">
          <div className="header-logo">
            <Link legacyBehavior href="/">
              <a>
                <img
                  alt="image"
                  className="img-fluid"
                  src="assets/img/logo_small_light.png"
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="sidebar-menu-area">
          <ul className="menu-list">
            <li className="menu-item-has-children menu-item ">
              <a href="#" className="drop-down" data-hover="Home">
                Home
              </a>
              <i
                className={`bi  dropdown-icon2 ${
                  state.activeMenu === "home-one" ? "bi-dash-lg" : "bi-plus-lg"
                }`}
                onClick={() => collapseMenu("home-one")}
              />
              <ul
                className={`sub-menu ${
                  state.activeMenu === "home-one" ? "d-block" : ""
                }`}
              >
                <li>
                  <Link legacyBehavior href="/">
                    <a>Home 01</a>
                  </Link>
                </li>
                {/* <li><Link legacyBehavior href="/index2"><a>Home 02</a></Link></li>
              <li><Link legacyBehavior href="/index3"><a>Home 03</a></Link></li>
              <li><Link legacyBehavior href="/index4"><a>Home 04</a></Link></li> */}
              </ul>
            </li>
            <li className="menu-item">
              <Link legacyBehavior href="/about" data-hover="About">
                <a>About</a>
              </Link>
            </li>
            <li className="menu-item-has-children menu-item">
              <Link legacyBehavior href="/blog-grid" data-hover="Service">
                <a>Service</a>
              </Link>
              <i
                className={`bi  dropdown-icon2 ${
                  state.activeMenu === "service" ? "bi-dash-lg" : "bi-plus-lg"
                }`}
                onClick={() => collapseMenu("service")}
              />
              <ul
                className={`sub-menu ${
                  state.activeMenu === "service" ? "d-block" : ""
                }`}
              >
                <li>
                  <Link legacyBehavior href="/service">
                    <a>Service</a>
                  </Link>
                </li>
                {/* <li>
                  <Link legacyBehavior href="/service2">
                    <a>Service 02</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/service3">
                    <a>Service 03</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/service4">
                    <a>Service 04</a>
                  </Link>
                </li> */}
                <li>
                  <Link legacyBehavior href="/service-details">
                    <a>Service Details</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children menu-item">
              <Link legacyBehavior href="/blog-grid" data-hover="Project">
                <a>Project</a>
              </Link>
              <i
                className={`bi  dropdown-icon2 ${
                  state.activeMenu === "projects" ? "bi-dash-lg" : "bi-plus-lg"
                }`}
                onClick={() => collapseMenu("projects")}
              />
              <ul
                className={`sub-menu ${
                  state.activeMenu === "projects" ? "d-block" : ""
                }`}
              >
                <li>
                  <Link legacyBehavior href="/project">
                    <a>Project</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/project-masonary">
                    <a>Project Masonry</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/project-details">
                    <a>Project Details</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children menu-item">
              <Link legacyBehavior href="/blog-grid" data-hover="Case Study">
                <a>Case Study</a>
              </Link>
              <i
                className={`bi  dropdown-icon2 ${
                  state.activeMenu === "case" ? "bi-dash-lg" : "bi-plus-lg"
                }`}
                onClick={() => collapseMenu("case")}
              />
              <ul
                className={`sub-menu ${
                  state.activeMenu === "case" ? "d-block" : ""
                }`}
              >
                <li>
                  <Link legacyBehavior href="/case-study">
                    <a>Case Study 01</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/case-study2">
                    <a>Case Study 02</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/case-study-standard">
                    <a>Case Study Standard</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/case-study-details">
                    <a>Case Study Details</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children menu-item">
              <Link legacyBehavior href="/blog-grid" data-hover="Blog">
                <a>Blog</a>
              </Link>
              <i
                className={`bi  dropdown-icon2 ${
                  state.activeMenu === "blog" ? "bi-dash-lg" : "bi-plus-lg"
                }`}
                onClick={() => collapseMenu("blog")}
              />
              <ul
                className={`sub-menu ${
                  state.activeMenu === "blog" ? "d-block" : ""
                }`}
              >
                <li>
                  <Link legacyBehavior href="/blog">
                    <a>Blog</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/blog-standard">
                    <a>Blog standard</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/blog-sidebar">
                    <a>Blog Sidebar</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/blog-masonary">
                    <a>Blog Masonary</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/blog-details">
                    <a>Blog Details</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children menu-item">
              <Link legacyBehavior href="/blog-grid" data-hover="Pages">
                <a>Pages</a>
              </Link>
              <i
                className={`bi  dropdown-icon2 ${
                  state.activeMenu === "pages" ? "bi-dash-lg" : "bi-plus-lg"
                }`}
                onClick={() => collapseMenu("pages")}
              />
              <ul
                className={`sub-menu ${
                  state.activeMenu === "pages" ? "d-block" : ""
                }`}
              >
                <li>
                  <Link legacyBehavior href="/team1">
                    <a>Team 01</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/team2">
                    <a>Team 02</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/team3">
                    <a>Team 03</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/pricing">
                    <a>Pricing 01</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/pricing2">
                    <a>Pricing 02</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/contact">
                    <a>Contact</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/faq">
                    <a>FAQs</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/error">
                    <a>Error 404</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
