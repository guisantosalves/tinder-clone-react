import React from 'react'
import Speaker from "./Speaker"

function Chats() {
  return (
    <div className="chats">
        <Speaker
            name="Mark"
            message="salve ee"
            timestamp="40 seconds ago"
            profilePic="https://i.pinimg.com/564x/37/24/0b/37240b1157f63188c281ff6199f83afc.jpg"
        />
    </div>
  )
}

export default Chats