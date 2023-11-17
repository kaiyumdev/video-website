import axiosInstance from "../../utils/axios";

export const getRelatedVideos = async ({ tags, id }) => {
  const response = await axiosInstance.get("/videos");
  return response.data;
};
