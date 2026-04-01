import axios from "axios";
import { __mockDB } from "./getPendingRequests";

export const resolveRequest = async ({
  requestId,
  response,
}: {
  requestId: string;
  response: string;
}) => {
  await new Promise((resolve) => setTimeout(resolve, 800));

  // 🔥 simulate DB update (removes item like backend would)
  const updated = __mockDB
    .get()
    .filter((req) => req.id !== requestId);

  __mockDB.set(updated);

  return { success: true };

  /* ================= REAL BACKEND =================
  const { data } = await axios.post("/ai/resolve", {
    requestId,
    response,
  });

  return data;
  ================================================= */
};