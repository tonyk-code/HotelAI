import { useQuery } from "@tanstack/react-query";
import { getServices } from "../../api/getServices";
import { QUERY_KEYS } from "../../constant/QUERY_KEYS";

export const useServices = () => {
  return useQuery({
    queryKey: QUERY_KEYS.SERVICES,
    queryFn: getServices,
  });
};