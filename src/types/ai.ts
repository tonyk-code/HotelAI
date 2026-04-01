export interface AIRequest {
  id: string;
  guestName: string;
  guestEmail: string;
  query: string;
  timestamp: string;
  status: "pending" | "resolved";
}