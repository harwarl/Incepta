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

export const getRaffleList = async (api_key, params) => {
  try {
    const response = await axiosClient.get("/raffles", {
      Headers: {
        Autorization: `Bearer ${api_key}`,
      },
      params: {
        ...params,
        status: "active",
        scope: "all",
        req: ["n", "d", "r", "f", "l", "t", "g"],
        pageNum: 0,
        pageSize: 50,
        sort: "newest",
        sortDir: -1,
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

export const getPendingRaffles = async (api_key) => {
  try {
    const params = {
      filter: "pending",
    };
    const pendingRaffles = await getRaffleList(api_list, params);

    return pendingRaffles;
  } catch (error) {
    console.log("Error getting pending raffles: ", error);
  }
};


// export const 