import { CITY_SEARCH_LIST, STATE_SEARCH }  from "../actions/cityAction";

const citylistReducer = (state = [], action) => {
    switch (action.type) {
      case CITY_SEARCH_LIST:
            return action.citylist;
        case STATE_SEARCH:
            return action.stateData;
    }
    return state;
  };
  
  export default citylistReducer;