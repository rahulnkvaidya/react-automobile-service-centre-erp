import { POST_DETAIL } from "../actions/postDetailAction";

const postlistReducer = (state = [], action) => {
    switch (action.type) {
        case POST_DETAIL:
            return action.postdetail;

        default:
            break;
    }
    return state;
};

export default postlistReducer;