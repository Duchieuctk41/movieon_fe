import authorizedAxiosInstance from "utils/customAxios";
import { API_ROOT_GOLANG } from "utils/constants";

const ratingApi = {
  createOrUpdateRating: async (data) => {
    const request = await authorizedAxiosInstance.post(
      `${API_ROOT_GOLANG}/api/v1/rating/cou-rating`,
      data
    );
    return request.data;
  },
};

export default ratingApi;
