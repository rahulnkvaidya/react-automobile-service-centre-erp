import { JOB_DETAIL } from "../actions/jobDetailAction";

const joblistReducer = (state = [], action) => {
    switch (action.type) {
        case JOB_DETAIL:
            return action.job;
        default:
            break;
    }
    return state;
};

export default joblistReducer;