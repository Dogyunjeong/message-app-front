import React from 'react';
import { useHistory } from 'react-router-dom';
import * as ChatTypes from '../../types/Chat.type';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

interface ChatListItemProps {
  chatRoom: ChatTypes.ChatRoom
}

const ChatListItem = React.memo(({ chatRoom }: ChatListItemProps) => {
  const history = useHistory()
  return (
    <ListItem button
      onClick={() => {
        history.push(`/chat-room/${chatRoom.id}`)
      }}
    >
      <ListItemText primary={chatRoom.members.map(({ name }) => name).join(', ')} />
    </ListItem>
  );
});

export default ChatListItem;
