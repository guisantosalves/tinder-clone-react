import React, { useState } from "react";
import Header from "./components/Header";
import { Avatar } from "@mui/material";
import "./components/css/UniqChat.css";

function UniqChat() {
  const [messages, setMessages] = useState([
    {
      nome: "Eru",
      image:
        "https://64.media.tumblr.com/c18f7a6e7a518685efbb8a416c7355d5/1bd1786c4931a2c3-05/s500x750/f9c966f8b56d53327d90422f43662ee433a3ba7b.jpg",
      message: "I love you <3",
    },
    {
      nome: "Eru",
      image:
        "https://64.media.tumblr.com/c18f7a6e7a518685efbb8a416c7355d5/1bd1786c4931a2c3-05/s500x750/f9c966f8b56d53327d90422f43662ee433a3ba7b.jpg",
      message: "do u love me ? :33",
    },
    {
      message: "I love you too <3",
    },
  ]);

  return (
    <>
      <Header />
      <div className="chatScreen">
        <p className="chatScreen__timestamp">
          YOU MATCHED WITH ERU ON 10/10/2022
        </p>
        {messages.map((item, index) => (
          
          item.nome ? (
            <div className="chatScreen__messageContainer">
            <Avatar
              className="chatScreen__image"
              src={item.image}
              alt={item.nome}
            />
            <p className="chatScreen__message">{item.message}</p>
          </div>
          ) : (
            <div className="chatScreen__messageContainer">
                <p className="chatScreen__messageUser">{item.message}</p>
            </div>
          )

        ))}
      </div>
    </>
  );
}

export default UniqChat;
