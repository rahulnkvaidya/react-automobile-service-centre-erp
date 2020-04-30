import axios from "axios";
export const STATE_SEARCH = "STATE_SEARCH";

export const StateSearch = (data) => {
  return async (dispatch) => {
    axios
      .get(
        `https://www.employmentnewsinindia.com/api/v2/citysearch/`+
        data
      )
      .then((res) => {
        const stateData = res.data;
        console.log(stateData);
        dispatch({ type: STATE_SEARCH, stateData: stateData });
      });
  };
};