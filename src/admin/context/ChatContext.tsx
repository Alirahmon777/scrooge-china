import { IChildProps } from '@/types/interfaces';
import { TStoreOrderModerator } from '@/types/types';
import React, { useState } from 'react';

interface IChatContext {
  orderChat: TStoreOrderModerator;
  setOrderChat: React.Dispatch<React.SetStateAction<TStoreOrderModerator>>;
}

export const ChatContext = React.createContext<IChatContext>(null!);

const lastOrder = JSON.parse(localStorage.getItem('moderator-last-order-chat') || '{}') as TStoreOrderModerator;

export const initialOrderChatAdmin = {
  steam_id: '',
  isChat: false,
  order_id: '',
  chat_id: '',
  status: '',
};

const ChatContextProvider: React.FC<IChildProps> = ({ children }) => {
  const [orderChat, setOrderChat] = useState<TStoreOrderModerator>({
    steam_id: lastOrder?.steam_id || '',
    isChat: lastOrder?.isChat || false,
    order_id: lastOrder?.order_id || '',
    chat_id: lastOrder?.chat_id || '',
    status: lastOrder?.status || '',
  });

  return <ChatContext.Provider value={{ orderChat, setOrderChat }}>{children}</ChatContext.Provider>;
};

export default ChatContextProvider;
