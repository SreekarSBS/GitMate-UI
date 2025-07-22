import React from 'react'
import { useParams } from 'react-router-dom'

const Chat = () => {
    const {targetUserId} = useParams()
    console.log(targetUserId);
    
  return (
    
    <div>
        Chat
    </div>
  )
}

export default Chat
