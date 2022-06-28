import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Chat from "./Chat";
import UniqChat from "./UniqChat";

function App() {
  return (
    <div className="App">

      <Routes>

        <Route path="/" element={<Home/>}/>

        <Route path="/chat" element={<Chat/>}/>
        
        <Route path="/chat/:person" element={<UniqChat/>}/>
      </Routes>

    </div>
  );
}

export default App;
