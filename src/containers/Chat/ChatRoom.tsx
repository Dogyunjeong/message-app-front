import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useChatRoom } from '../../hooks/Chat.hooks'
import Message from '../../components/Chat/Message'

import { TEST_USER_UUID } from '../../testData'

const ChatRoom = () => {
  const history = useHistory()
  const { roomId } = useParams<{ roomId: string }>()
  const [chatRoom, isLoadingChatRoom] = useChatRoom(roomId)
  if (isLoadingChatRoom) {
    return (<div>is Loading chatroom...</div>)
  }
  if (!chatRoom) {
    return (<div>Chat room is not found. will be redirect...</div>)
  }

  return (
    <div>
      <button onClick={() => {
        history.push('/')
      }}>Back to home</button>
      <p>{chatRoom.members.map(({ name }) => name).join(', ')}</p>
      <div>
        {chatRoom.messages.map((message, idx) => {
          const sender = chatRoom.members.find(({ uuid }) => message.sender )
          return (
            <Message
              key={`message-${idx}`}
              message={message}
              sender={sender}
              isMine={message.sender === TEST_USER_UUID}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ChatRoom

