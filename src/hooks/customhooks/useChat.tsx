// src/hooks/useChat.ts
import { processChatMessage } from "../../api/chatservice"; 

export const useChat = () => {
  const send = async (message: string) => {
    const result = await processChatMessage(message);
    return result;
  };

  return { send };
};