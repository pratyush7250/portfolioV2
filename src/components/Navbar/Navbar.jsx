import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menu, setMenu] = useState("destinations");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  return (
    <>

      <div className="navbar">
        <img src={assets.logo} alt="logo" className="logo" />

        <ul className="navbar-menu">
          <a href="#home" onClick={() => setMenu("destinations")} className={menu === "destinations" ? "active" : ""}>
            HOME
          </a>
          <a href="#about-me" onClick={() => setMenu("safari")} className={menu === "safari" ? "active" : ""}>
            ABOUT ME
          </a>
          <a href="#skills" onClick={() => setMenu("kilimanjaro")} className={menu === "kilimanjaro" ? "active" : ""}>
            SKILLS
          </a>
          <a href="#services" onClick={() => setMenu("services")} className={menu === "services" ? "active" : ""}>
            SERVICES
          </a>

          <li
            className="dropdown"
            onMouseEnter={() => setOpenDropdown("travel")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            PROJECTS <FaAngleDown />
            <ul className={`dropdown-menu ${openDropdown === "travel" ? "show" : ""}`}>
              <a href="#web-apps" onClick={() => setOpenDropdown(null)}>
                <li>Web Apps</li>
              </a>
              <a href="#android-apps" onClick={() => setOpenDropdown(null)}>
                <li>Mobile Apps</li>
              </a>
              <a href="#machine-learning" onClick={() => setOpenDropdown(null)}>
                <li>Machine Learning</li>
              </a>
              <a href="#projects" onClick={() => setOpenDropdown(null)}>
                <li>All Projects</li>
              </a>
            </ul>
          </li>


        </ul>

        <div className="navbar-right">

          <div className="icon">
           <a href="https://github.com/pratyush7250" target="_blank" rel="noreferrer">
             <IoLogoGithub size={18} />
           </a>
          </div>

         <a href="#contact"><button className="desktop-btn">CONTACT ME</button></a>

          <div className="menu-icon" onClick={() => setDrawerOpen(true)}>
            <FaBars size={22} />
          </div>
        </div>
      </div>

      <div className={`mobile-drawer ${drawerOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <FaTimes size={22} onClick={() => setDrawerOpen(false)} />
        </div>

        <ul className="drawer-menu">
          <a href="#home" >HOME</a>
          <a href="#about-me" >ABOUT ME</a>
          <a href="#skills" >SKILLS</a>
          <a href="#services" >SERVICES</a>

          <li
            className="drawer-dropdown"
            onClick={() =>
              setMobileDropdown(mobileDropdown === "travel" ? null : "travel")
            }
          >
            PROJECTS <FaAngleDown />
          </li>
          {mobileDropdown === "travel" && (
            <ul className="drawer-submenu">
              <li><a href="#web-apps">Web Apps</a></li>
              <li><a href="#android-apps">Mobile Apps</a></li>
              <li><a href="#machine-learning">Machine Learning</a></li>
              <li><a href="#all-projects">All Projects</a></li>
            </ul>
          )}


        </ul>

       <a href="#contact"><button className="drawer-btn">CONTACT ME</button></a>
      </div>

      {drawerOpen && <div className="drawer-overlay" onClick={() => setDrawerOpen(false)} />}
    </>
  );
};

export default Navbar;
