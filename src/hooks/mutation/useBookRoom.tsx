import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { bookRoom } from "../../api/bookRoom";
export function useBookRoom() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: bookRoom,

    onSuccess: () => {
      toast.success("Room booked successfully!");

      // refetch rooms list
      queryClient.invalidateQueries({ queryKey: ["rooms"] });
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}
