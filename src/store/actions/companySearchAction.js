import axios from "axios";
export const COMPANY_SEARCH_LIST = "COMPANY_SEARCH_LIST";
export const RATNA_SEARCH = "RATNA_SEARCH";

export const fetchJoblist = (data) => {
  return async (dispatch) => {
    axios
      .get(
        `https://www.employmentnewsinindia.com/api/v2/companysuggestion/`+
        data
      )
      .then((res) => {
        const companylist = res.data;
        dispatch({ type: COMPANY_SEARCH_LIST, companylist: companylist });
      });
  };
};

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