import axios from "axios";
import type { AIRequest } from "../types/ai";

// 🔥 Mock DB (acts like real backend memory)
let mockDB: AIRequest[] = [
  {
    id: "req_1",
    guestName: "Marcus Thorne",
    guestEmail: "m.thorne@email.com",
    query: "Does the rooftop bar allow pets after 9 PM?",
    timestamp: "10 mins ago",
    status: "pending",
  },
  {
    id: "req_2",
    guestName: "Sarah Jenkins",
    guestEmail: "sjenks@travel.org",
    query:
      "I need to book the conference room for a private yoga session at 5 AM. Is that possible?",
    timestamp: "25 mins ago",
    status: "pending",
  },
];

export const getPendingRequests = async (): Promise<AIRequest[]> => {
  await new Promise((resolve) => setTimeout(resolve, 700));

  return mockDB;

  /* ================= REAL BACKEND =================
  try {
    const { data } = await axios.get("/ai/pending");
    return data; // should be AIRequest[]
  } catch (error) {
    console.error("Fetch failed:", error);
    throw error;
  }
  ================================================= */
};

// 👇 export this so mutation can update it
export const __mockDB = {
  get: () => mockDB,
  set: (data: AIRequest[]) => {
    mockDB = data;
  },
};