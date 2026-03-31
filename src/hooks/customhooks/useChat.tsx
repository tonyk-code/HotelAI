import { useMutation } from "@tanstack/react-query";
import {
  processChatMessage,
  type ChatResponse,
} from "../../api/chatservice"
import type { Message } from "../../types/message";

export const useChat = () => {
  return useMutation<
    ChatResponse,
    Error,
    { message: string; history: Message[] }
  >({
    mutationFn: ({ message, history }) => processChatMessage(message, history),
  });
};
