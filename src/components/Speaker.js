import React from 'react'
import "./css/Speaker.css"
import { Avatar } from '@mui/material'

function Speaker({name, message, timestamp, profilePic}) {
  return (
    <div className="chat">
        <Avatar className='chat__image' src={profilePic}/>
        
        <div className='chat__details'>
            <h2>{name}</h2>
            <p>{message}</p>
        </div>

        <p className='chat__timestamp'>{timestamp}</p>
    </div>
  )
}

export default Speaker