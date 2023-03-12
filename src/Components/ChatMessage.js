import React from 'react'

const ChatMessage = ({name,text}) => {
  return (
    <div className='shadow-sm p-2'>
      {name} 
      {text}
    </div>
  )
}

export default ChatMessage
