import React from "react";
import "./css/Header.css";
import { Person } from "@mui/icons-material";
import { Forum } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header({ backButton }) {

  const navigate = useNavigate();

  //backButton -> /
  return (
    <div className="header">

      {backButton ? (

          <IconButton onClick={()=>navigate(backButton, {replace: true})}>
            <ArrowBackIos className="header__icon" fontSize="large" />
          </IconButton>
        
      ) : (
        <IconButton>
          <Person className="header__icon" fontSize="large" />
        </IconButton>
      )}

      <Link to="/">
        <img
          className="header__image"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/TinderIcon-2017.svg/640px-TinderIcon-2017.svg.png"
          alt="tinder logo"
        />
      </Link>

      <Link to="/chat">
        <IconButton>
          <Forum className="header__icon" fontSize="large" />
        </IconButton>
      </Link>

    </div>
  );
}

export default Header;
