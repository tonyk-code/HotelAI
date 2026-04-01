// hooks/useResolveRequest.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { resolveRequest } from "../../api/resolveRequest";

export const useResolveRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: resolveRequest,

    onSuccess: () => {
      // 🔄 Refetch requests after resolving
      queryClient.invalidateQueries({ queryKey: ["ai-requests"] });
    },
  });
};
