import React from "react";
import "./css/SwipeButtons.css";

//icons
import { Replay } from "@mui/icons-material";
import { Close } from "@mui/icons-material";
import { StarRate } from "@mui/icons-material";
import { Favorite } from "@mui/icons-material";
import { FlashOn } from "@mui/icons-material";
import { IconButton } from "@mui/material";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
        
      <IconButton><Replay className="swipeButtons__repeat" fontSize="large" /></IconButton>
      <IconButton><Close className="swipeButtons__left" fontSize="large" /></IconButton>
      <IconButton><StarRate className="swipeButtons__star" fontSize="large"/></IconButton>
      <IconButton><Favorite className="swipeButtons__right" fontSize="large" /></IconButton>
      <IconButton><FlashOn className="swipeButtons__lightning" fontSize="large"/></IconButton>

    </div>
  );
}

export default SwipeButtons;
