import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../../constant/QUERY_KEYS";
import { getHotelRooms } from "../../api/getHotelRooms";

export default function useRooms() {
  return useQuery({
    queryKey: QUERY_KEYS.ROOMS,
    queryFn: getHotelRooms
  })
}
