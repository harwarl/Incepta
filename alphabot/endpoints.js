import { axiosClient } from "./config.js";

export const registerForRaffle = async (api_key, body) => {
  try {
    const response = await axiosClient.post("/register", {
      body: body,
      Headers: {
        Autorization: `Bearer ${api_key}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error registering API key:", error);
    throw error;
  }
};

export const getRaffleList = async (
  api_key,
  {
    sort = "newest",
    sortDir = -1,
    scope = "all",
    status = "active",
    req = ["n", "d", "r", "f", "l", "t", "g"],
    pageNum = 0,
    pageSize = 50,
  }
) => {
  try {
    const response = await axiosClient.get("/raffles", {
      Headers: {
        Autorization: `Bearer ${api_key}`,
      },
      params: {
        sort,
        sortDir,
        scope,
        status,
        req,
        pageNum,
        pageSize,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error registering API key:", error);
    throw error;
  }
};

export const getSingleRaffle = async (slug) => {
  try {
    const response = await axiosClient.get(`/raffles/${slug}`, {
      Headers: {
        Autorization: `Bearer ${api_key}`,
      },
    });

    return response.data;
  } catch (error) {
    console.log("Error getting single raffle: ", error);
    throw error;
  }
};
