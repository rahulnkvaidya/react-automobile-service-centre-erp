import { POST_LIST} from "../actions/postAction";

const postlistReducer = (state = [], action) => {
    switch (action.type) {
      case POST_LIST:
            return action.post;
    }
    return state;
  };
  
  export default postlistReducer;