import AXIOS from "../../../services/axios";

export const getAllAboutAgileCard = () => async (dispatch) => {
  try {
    const result = await AXIOS.get("/api/v1/about-us-card");
    console.log("???????", result?.data?.data);
    dispatch({
      type: "GET_AGILE_CARD",
      payload: result?.data?.data,
    });
  } catch (error) {
    return error;
  }
};
