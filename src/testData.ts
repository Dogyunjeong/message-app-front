import * as ChatTypes from './types/Chat.type'

const DUMMY_USERS = [
    { uuid: 'test-user-1', name: 'James' },
    { uuid: 'test-user-2', name: 'Timothy' },
    { uuid: 'test-user-3', name: 'Max' },
]

export const TEST_USER_UUID = "test-user-uuid";


export const ChatDummyData: ChatTypes.ChatRoom[] = [
    {
        id: 'room-0',
        members: [DUMMY_USERS[0]],
        messages: []
    },
    {
        id: 'room-1',
        members: [DUMMY_USERS[1]],
        messages: []
    },
    {
        id: 'room-2',
        members: [DUMMY_USERS[2]],
        messages: []
    }
]