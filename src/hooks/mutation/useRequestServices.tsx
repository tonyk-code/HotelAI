import { useMutation } from "@tanstack/react-query";
import { requestService } from "../../api/requestServices"; 

export const useRequestService = () => {
  return useMutation({
    mutationFn: requestService,
  });
};