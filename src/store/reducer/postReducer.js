import { POST_LIST, POST_DETAIL, POST_ONCHANGE } from "../actions/postAction";

const postlistReducer = (state = [], action) => {
    switch (action.type) {
      case POST_LIST:
            return action.post;
        case POST_DETAIL:
            return action.post;
    }
    return state;
  };
  
  export default postlistReducer;