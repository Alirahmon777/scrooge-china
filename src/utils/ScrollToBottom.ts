import { RefObject } from 'react';

export const ScrollToBottom = (ref: RefObject<HTMLDivElement>, behavior: ScrollBehavior) => {
  ref.current?.scrollTo({ top: ref.current.scrollHeight, behavior });
};
