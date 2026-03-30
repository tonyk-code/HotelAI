import { rooms } from "../data/mockData";

export const getHotelRooms = async () => {
  /* 
  const resp = await api.get("/rooms");
  return resp.data;
  */

  return new Promise<typeof rooms>((resolve) => {
    setTimeout(() => {
      resolve(rooms);
    }, 800);
  });
};
