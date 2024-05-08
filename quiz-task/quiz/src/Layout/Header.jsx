import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="coloshop">
        <h1 className="colo">COLO</h1>
        <h1 className="shop">SHOP</h1>
      </div>

      <nav>
        <ul>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"shop"}
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/promotion"}
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              Promotion
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/pages"}
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              Pages
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"blog"}
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
