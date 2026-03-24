export type Message = {
  id: string;
  text: string;
  sender: "user" | "ai";
  createdAt?: number;
  status?: "sending" | "sent" | "error";
  meta?: {
    type?: "service" | "feedback" | "info" | "general" | undefined;
    action?: "CREATE_TASK" | "SEND_FEEDBACK" | undefined;
    payload?: any;
  };
};
