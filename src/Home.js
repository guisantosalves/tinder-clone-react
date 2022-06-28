import React from 'react'
import TinderCards from './components/TinderCards'
import SwipeButtons from "./components/SwipeButtons"
import Header from "./components/Header";

function Home() {
  return (
    <>
      <Header />
      <TinderCards/>
      <SwipeButtons/>
    </>
  )
}

export default Home