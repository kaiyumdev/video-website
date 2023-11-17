import axiosInstance from "../../utils/axios";

export const getRelatedVideos = async () => {
  const response = await axiosInstance.get("/videos");
  return response.data;
};
