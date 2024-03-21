import { IChildProps } from '@/types/interfaces';
import { TStoreOrderUser } from '@/types/types';
import React, { useState } from 'react';

interface IChatContext {
  orderChat: TStoreOrderUser;
  setOrderChat: React.Dispatch<React.SetStateAction<TStoreOrderUser>>;
}

export const ChatContextUser = React.createContext<IChatContext>(null!);

export const initialOrderChat = {
  moderator_id: '',
  isChat: false,
  order_id: '',
  chat_id: '',
  status: '',
};

const lastOrder = JSON.parse(localStorage.getItem('user-last-order-chat') || '{}') as TStoreOrderUser;

const ChatContextUserProvider: React.FC<IChildProps> = ({ children }) => {
  const [orderChat, setOrderChat] = useState<TStoreOrderUser>({
    moderator_id: lastOrder?.moderator_id || '',
    isChat: lastOrder?.isChat || false,
    order_id: lastOrder?.order_id || '',
    chat_id: lastOrder?.chat_id || '',
    status: lastOrder?.status || '',
  });

  return <ChatContextUser.Provider value={{ orderChat, setOrderChat }}>{children}</ChatContextUser.Provider>;
};

export default ChatContextUserProvider;
