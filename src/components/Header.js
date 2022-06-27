import React from "react";
import "./css/Header.css";
import { Person } from "@mui/icons-material";
import { Forum } from "@mui/icons-material";
import { IconButton } from "@mui/material";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <Person className="header__icon" fontSize="large" />
      </IconButton>

      <img
        className="header__image"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/TinderIcon-2017.svg/640px-TinderIcon-2017.svg.png"
        alt="tinder logo"
      />
      
      <IconButton>
        <Forum className="header__icon" fontSize="large" />
      </IconButton>
    </div>
  );
}

export default Header;
