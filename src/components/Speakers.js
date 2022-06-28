import React from 'react'
import Speaker from "./Speaker"

function Chats() {
  return (
    <div className="chats">
        <Speaker
            name="Eru"
            message="I love you too <3"
            timestamp="40 seconds ago"
            profilePic="https://64.media.tumblr.com/c18f7a6e7a518685efbb8a416c7355d5/1bd1786c4931a2c3-05/s500x750/f9c966f8b56d53327d90422f43662ee433a3ba7b.jpg"
        />
    </div>
  )
}

export default Chats