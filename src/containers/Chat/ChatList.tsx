import React from "react";
import List from "@material-ui/core/List";
import { useChatList } from "../../hooks/Chat.hooks";
import ChatListItem from "../../components/Chat/ChatListItem";

import { TEST_USER_UUID } from '../../testData'

const ChatList = React.memo(() => {
  const [chatList, isLoadingChatList] = useChatList(TEST_USER_UUID);
  if (isLoadingChatList) {
    return <div>is Loading...</div>;
  }
  return (
    <div>
      <p>Message app</p>
      <List component="nav" aria-label="main mailbox folders">
        {chatList.map((chatRoom, idx) => (
          <ChatListItem
            key={`chat-list-${idx}`}
            chatRoom={chatRoom}
          />
        ))}
      </List>
    </div>
  );
});

export default ChatList;
