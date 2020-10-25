export interface User {
  uuid: string,
  name: string
}
export interface Message {
  sender: string
  message: string
  receiver: string
  sentAt: string
}

export interface ChatRoom {
  id: string
  messages: Message[]
  members: User[]
}