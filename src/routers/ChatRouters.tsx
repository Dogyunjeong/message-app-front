import React from 'react'
import ChatList from '../containers/Chat/ChatList'
import ChatRoom from '../containers/Chat/ChatRoom'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const ChatRouters = () => {
  return (
    <Switch>
      <Route exact path="/">
        <ChatList />
      </Route>
      <Route path="/chat-room/:roomId">
        <ChatRoom />
      </Route>
    </Switch>
  )
}

export default ChatRouters