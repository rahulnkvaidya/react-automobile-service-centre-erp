import { SEARCH_LIST } from "../actions/searchAction";

const searchlistReducer = (state = [], action) => {
  switch (action.type) {
    case SEARCH_LIST:
      return action.jobs;
    default:
      break;
  }
  return state;
};

export default searchlistReducer;