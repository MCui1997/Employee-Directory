import React from "react";
import SearchName from "./SearchName.js";
import "../styles/Nav.css";

function Nav() {
  return (
    <nav className="navbar">
        <div className="search-area col-12">
          <SearchName />
        </div>
    </nav>
  );
}
export default Nav;
