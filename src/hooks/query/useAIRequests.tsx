// hooks/useAIRequests.ts
import { useQuery } from "@tanstack/react-query";
import { getPendingRequests } from "../../api/getPendingRequests";

export const useAIRequests = () => {
  return useQuery({
    queryKey: ["ai-requests"],
    queryFn: getPendingRequests,
  });
};