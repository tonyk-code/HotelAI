import axios from "axios";

export const requestService = async (serviceId: string) => {
  const res = await axios.post("/api/service-request", {
    serviceId,
  });

  return res.data;
};