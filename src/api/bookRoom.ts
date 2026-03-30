import { rooms } from "../data/mockData";
// import api from "./axiosInstance"; // use later

export const bookRoom = async (roomId: string) => {
  /*
  const resp = await api.post(`/rooms/${roomId}/book`);
  return resp.data;
  */

  // mock update (simulate booking)
  return new Promise<{ success: boolean; roomId: string }>((resolve, reject) => {
    setTimeout(() => {
      const roomExists = rooms.find((r) => r.id === roomId);

      if (!roomExists) {
        reject(new Error("Room not found"));
      } else {
        resolve({ success: true, roomId });
      }
    }, 800);
  });
};