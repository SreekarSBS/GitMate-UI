import React from 'react'
import { useParams } from 'react-router-dom'

const Chat = () => {
    const {targetUserId} = useParams()
    console.log(targetUserId);
    
  return (
    
    <div className='mx-auto my-10 rounded-lg border-cyan-500 w-[50vh] md:w-1/2 border flex flex-col   h-[80vh]  ' >
        <div className='w-full rounded-3xl h-20 btn border-b-6 border-b-cyan-500 text-2xl'>Chat</div>
          <div className='flex-1 overflow-scroll p-5'></div>
          <div className='p-5 border-t flex items-center  border-gray-600 gap-2'>
            <input className='overfow-scroll bg-base-200 flex-1 border border-gray-500 text-white h-full rounded-lg'></input>
            <button className='btn btn-primary'>
                Send
            </button>   
          </div>
    </div>
  )
}

export default Chat
