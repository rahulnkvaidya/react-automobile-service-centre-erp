import { RATNA_SEARCH }  from "../actions/ratnaAction";

const companylistReducer = (state = [], action) => {
    switch (action.type) {
      case RATNA_SEARCH:
        return action.ratna;
    }
    return state;
  };
  
  export default companylistReducer;