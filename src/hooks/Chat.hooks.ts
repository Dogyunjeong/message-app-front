import { useState, useEffect } from 'react'
import * as ChatTypes from '../types/Chat.type'
import ChatService from '../services/Chat.service'

export const useChatList = (userUuid: string): [ChatTypes.ChatRoom[], boolean] => {
    const [chatList, setChatList] = useState<ChatTypes.ChatRoom[]>([])
    const [isLoadingChatList, setLoading] = useState(false)

    useEffect(() => {
        const subscribeChatList = async () => {
            const chatService = await ChatService.getInstance()
            setLoading(true)
            //  need subscrinbing mechanism
            setChatList(await chatService.getChatList(userUuid))
            setLoading(false)
        }
        subscribeChatList()
    }, [])
    return [chatList, isLoadingChatList]
}

export const useChatRoom = (roomId: string): [ChatTypes.ChatRoom | undefined, boolean] => {
    const [chatRoom, setChatRoom] = useState<ChatTypes.ChatRoom>()
    const [isLoadingChatRoom, setLoading] = useState(false)


    useEffect(() => {
        const subscribeChatRoom = async () => {
            const chatService = await ChatService.getInstance()
            setLoading(true)
            setChatRoom(await chatService.getChatRoom(roomId))
            setLoading(false)
        }
        subscribeChatRoom()
    }, [])
    return [chatRoom, isLoadingChatRoom]
}