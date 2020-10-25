import React from 'react'
import * as ChatTypes from '../../types/Chat.type'

interface MessageProps {
  isMine: boolean
  message: ChatTypes.Message
  sender: ChatTypes.User | undefined
}

const Message = React.memo(({ message, isMine, sender }: MessageProps) => {
  return (
    <div>
      <p>{message}</p>
      <p>{isMine ? 'Me' : sender && sender.name}</p>
    </div>
  )
})

export default Message
