// src/services/chat.service.ts
import type { Message } from "../types/message";

interface ChatResponse {
  reply: string;
  meta: Message["meta"];
}

export const processChatMessage = async (message: string): Promise<ChatResponse> => {
  const lower = message.toLowerCase();

  // --- SERVICE REQUEST ---
  if (lower.includes("towel") || lower.includes("clean")) {
    return {
      reply: "Cleaning service has been requested.",
      meta: {
        type: "service" as const,
        action: "CREATE_TASK" as const,
        payload: { service: "cleaning" },
      },
    };
  }

  if (lower.includes("ac") || lower.includes("not working")) {
    return {
      reply: "Maintenance has been notified about your AC issue.",
      meta: {
        type: "service" as const,
        action: "CREATE_TASK" as const,
        payload: { service: "maintenance" },
      },
    };
  }

  // --- FEEDBACK ---
  if (lower.includes("bad") || lower.includes("dirty")) {
    return {
      reply:
        "We're sorry to hear that. Your feedback has been shared with management.",
      meta: {
        type: "feedback" as const,
        action: "SEND_FEEDBACK" as const,
        payload: { sentiment: "negative" },
      },
    };
  }

  if (lower.includes("great") || lower.includes("good")) {
    return {
      reply: "We're glad you enjoyed your stay. Thank you for the feedback!",
      meta: {
        type: "feedback" as const,
        action: "SEND_FEEDBACK" as const,
        payload: { sentiment: "positive" },
      },
    };
  }

  // --- ROOM SUGGESTION ---
  if (lower.includes("room") || lower.includes("quiet")) {
    return {
      reply:
        "We recommend a deluxe room on the top floor for a quiet experience.",
      meta: {
        type: "info" as const,
        // action is intentionally omitted
      },
    };
  }

  // --- EVENTS ---
  if (lower.includes("event") || lower.includes("today")) {
    return {
      reply:
        "There is a cultural dinner tonight at 7PM in the main hall.",
      meta: {
        type: "info" as const,
        // action is intentionally omitted
      },
    };
  }

  // --- DEFAULT ---
  return {
    reply:
      "I'm here to assist you with your stay. Could you clarify your request?",
    meta: {
      type: "general" as const,
      // action is intentionally omitted
    },
  };
};