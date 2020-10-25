import * as ChatTypes from '../types/Chat.type'
import { ChatDummyData } from '../testData'
class ChatService {
    private static instance: ChatService

    private _hasSubscribed: boolean = false
    private _chatList: ChatTypes.ChatRoom[] = []

    static async getInstance () {
        if (!this.instance) {
            this.instance = new ChatService()
        }
        return this.instance
    }

    // Some server connecting process and fetching data. there must be subscribing mechanism too for realtime.
    // currently set dummy data for few seconds
    private async _subscribeChatList (): Promise<void> {
        return new Promise((done) => {
            setTimeout(() => {
                this._chatList = ChatDummyData
                done()
            }, 500)
        })
    }

    public async getChatList(userUuid: string): Promise<ChatTypes.ChatRoom[]> {
        if (!this._hasSubscribed) {
        await this._subscribeChatList()
        }
        return this._chatList
    }

    public async getChatRoom(roomId: string): Promise<ChatTypes.ChatRoom | undefined> {
        if (!this._hasSubscribed) {
            await this._subscribeChatList()
        }
        const chatList = this._chatList
        const room = chatList.find((r) => r.id === roomId)
        return room
    }
}

export default ChatService
