import type { Message } from "../types/message";

export interface ChatResponse {
  reply: string;
  meta?: {
    type?: string;
    action?: "CREATE_TASK" | "SEND_FEEDBACK";
    payload?: any;
  };
}

export const processChatMessage = async (
  message: string,
  history: Message[]
): Promise<ChatResponse> => {
  const res = await fetch("https://your-api.com/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
      history, 
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to fetch AI response");
  }

  return res.json();
};