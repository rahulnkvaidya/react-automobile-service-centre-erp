import axios from "axios";
export const CITY_SEARCH_LIST = "CITY_SEARCH_LIST";
export const STATE_SEARCH = "STATE_SEARCH";

export const fetchCitylist = (data) => {
  return async (dispatch) => {
    axios
      .get(
        `https://www.employmentnewsinindia.com/api/v2/companysuggestion/`+
        data
      )
      .then((res) => {
        const citylist = res.data;
        dispatch({ type: CITY_SEARCH_LIST, citylist: citylist });
      });
  };
};

export const StateSearch = (data) => {
  return async (dispatch) => {
    axios
      .get(
        `https://www.employmentnewsinindia.com/api/v2/citysearch/`+
        data
      )
      .then((res) => {
        const stateData = res.data;
        dispatch({ type: STATE_SEARCH, stateData: stateData });
      });
  };
};