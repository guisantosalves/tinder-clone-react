import React from 'react'
import Header from "./components/Header";
import Speakers from './components/Speakers';

function Chat() {
  return (
    <>
      <Header backButton="/"/>
      <Speakers/>
    </>
  )
}

export default Chat