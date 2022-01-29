import React, { Fragment, useContext, useState } from "react";
/// React router dom
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeContext";
// import logo from "../../images/logo-full-white.png";
import logoWhite from "../../../images/logo-full-white.png";
import logo from "../../../images/logo.png";

const NavHader = () => {
  const [toggle, setToggle] = useState(false);
  const { navigationHader, openMenuToggle, background } = useContext(
    ThemeContext
  );
  return (
    <div className="nav-header">
      <Link to="/dashboard" className="brand-logo">
        {background.value === "dark" || navigationHader !== "color_1" ? (
          <span>
            <span><img src={logo} alt="Logo" className="logo-abbr" /></span>
            <span><img src={logoWhite} alt="Logo" className="brand-title" /></span>
          </span>
        ) : (
          <span>
            <span><img src={logo} alt="Logo" className="logo-abbr" /></span>
            <span><img src={logoWhite} alt="Logo" className="brand-title" /></span>
          </span>
        )}
      </Link>

      <div
        className="nav-control"
        onClick={() => {
          setToggle(!toggle);
          openMenuToggle();
        }}
      >
        <div className={`hamburger ${toggle ? "is-active" : ""}`}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </div>
  );
};

export default NavHader;
