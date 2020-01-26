import axios from "axios";
export const RATNA_SEARCH = "RATNA_SEARCH";

export const RatnaSearch = (data) => {
  return async (dispatch) => {
    axios
      .get(
        `https://www.employmentnewsinindia.com/api/v2/ratnasuggestion/`+
        data
      )
      .then((res) => {
        const ratna = res.data;
        dispatch({ type: RATNA_SEARCH, ratna: ratna });
      });
  };
};