import { COMPANY_SEARCH_LIST }  from "../actions/companySearchAction";

const companylistReducer = (state = [], action) => {
    switch (action.type) {
      case COMPANY_SEARCH_LIST:
        return action.companylist;
    }
    return state;
  };
  
  export default companylistReducer;