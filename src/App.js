import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Chat from "./Chat";

function App() {
  return (
    <div className="App">
      {/* header */}
      <Header />
      <Routes>

        <Route path="/" element={<Home/>}/>

        <Route path="/chat" element={<Chat/>}/>
        
      </Routes>
      {/* tinder cards */}
      {/* buttons */}

      {/* chats screen */}
      {/* individual chat screen */}
    </div>
  );
}

export default App;
