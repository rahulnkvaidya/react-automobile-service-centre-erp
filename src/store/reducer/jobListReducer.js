import { JOB_LIST } from "../actions/jobListAction";

const joblistReducer = (state = [], action) => {
    switch (action.type) {
      case JOB_LIST:
        return action.jobs;
    }
    return state;
  };
  
  export default joblistReducer;