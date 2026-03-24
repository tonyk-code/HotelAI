import { services } from "../data/mockData";

export const getServices = async () => {
  /* 
  const resp = await api.get("/services");
  return resp.data;
  */

  return new Promise<typeof services>((resolve) => {
    setTimeout(() => {
      resolve(services);
    }, 800); 
  });
};