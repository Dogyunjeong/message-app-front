import * as ChatTypes from './types/Chat.type'

const DUMMY_USERS = [
    { uuid: 'test-user-1', name: 'James' },
]

export const TEST_USER_UUID = "test-user-uuid";


export const ChatDummyData: ChatTypes.ChatRoom[] = [
    {
        id: 'room-1',
        members: [DUMMY_USERS[0]],
        messages: []
    }
]