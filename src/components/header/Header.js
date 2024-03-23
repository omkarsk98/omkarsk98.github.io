import React from "react";
import "./Header.css";
import { NavLink, Link, useParams } from "react-router-dom";
import { greeting } from "../../portfolio.js";
import LightTheme from "../../theme";

function Header(props) {
  const { role = "sde" } = useParams();

  const link = role === "ds" ? "/ds" : "/sde";

  return (
    // <Fade top duration={1000} distance="20px">
    <div>
      <header className="header">
        <NavLink to={link} tag={Link} className="logo">
          <span className="logo-name" style={{ color: LightTheme.text }}>
            {greeting.logo_name}
          </span>
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
              style={{ borderRadius: 5, color: LightTheme.text }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="ec"
              to={`/${role}/education`}
              tag={Link}
              style={{ borderRadius: 5, color: LightTheme.text }}
            >
              Education
            </NavLink>
          </li>
          <li>
            <NavLink
              className="xp"
              to={`/${role}/experience`}
              tag={Link}
              style={{ borderRadius: 5, color: LightTheme.text }}
            >
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              className="projects"
              to={`/${role}/projects`}
              tag={Link}
              style={{ borderRadius: 5, color: LightTheme.text }}
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
