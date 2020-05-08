import { RATNA_SEARCH } from "../actions/ratnaAction";

const companylistReducer = (state = [], action) => {
  switch (action.type) {
    case RATNA_SEARCH:
      return action.ratna;
    default:
      break;
  }
  return state;
};

export default companylistReducer;