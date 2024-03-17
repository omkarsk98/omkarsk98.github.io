import React from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import { greeting } from "../../portfolio.js";

function Header(props) {
  // get url params
  const url = window.location.href;
  const urlParam = url.split("/");
  const role = urlParam.includes("ds") ? "ds" : "sde";
  const theme = props.theme;

  // const activeStyle = { fontWeight: "bold", backgroundColor: theme.accentColor, color: "#fff" };
  const activeStyle = {};

  const link = role === "ds" ? "/ds" : "/sde";

  return (
    // <Fade top duration={1000} distance="20px">
    <div>
      <header className="header">
        <NavLink to={link} tag={Link} className="logo">
          <span style={{ color: theme.text }}></span>
          <span className="logo-name" style={{ color: theme.text }}>
            {greeting.logo_name}
          </span>
          <span style={{ color: theme.text }}></span>
        </NavLink>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <NavLink
              className="homei"
              to={`/${role}/`}
              tag={Link}
              activeStyle={activeStyle}
              style={{ borderRadius: 5, color: theme.text }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="ec"
              to={`/${role}/education`}
              tag={Link}
              activeStyle={activeStyle}
              style={{ borderRadius: 5, color: theme.text }}
            >
              Education and Certifications
            </NavLink>
          </li>
          <li>
            <NavLink
              className="xp"
              to={`/${role}/experience`}
              tag={Link}
              activeStyle={activeStyle}
              style={{ borderRadius: 5, color: theme.text }}
            >
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              className="projects"
              to={`/${role}/projects`}
              tag={Link}
              activeStyle={activeStyle}
              style={{ borderRadius: 5, color: theme.text }}
            >
              Projects
            </NavLink>
          </li>
          {/* <li>
              <NavLink
                className="cr"
                to={`/${role}/contact`}
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                Contact and Resume
              </NavLink>
            </li> */}
          {/* <button {...styles} onClick={changeTheme}>
              {icon}
            </button> */}
        </ul>
      </header>
    </div>
    // </Fade>
  );
}

export default Header;
