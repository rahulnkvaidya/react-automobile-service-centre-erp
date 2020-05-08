import { STATE_SEARCH }  from "../actions/cityAction";

const citylistReducer = (state = [], action) => {
    switch (action.type) {
      
        case STATE_SEARCH:
            return action.stateData;
        default:
            break;
    }
    return state;
  };
  
  export default citylistReducer;