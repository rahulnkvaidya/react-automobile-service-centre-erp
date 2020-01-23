import { JOB_LIST, JOB_DETAIL } from "../actions/jobListAction";

const joblistReducer = (state = [], action) => {
    switch (action.type) {
      case JOB_LIST:
            return action.jobs;
        case JOB_DETAIL:
            return action.jobs;
    }
    return state;
  };
  
  export default joblistReducer;