import axios from "axios";

export const JOB_DETAIL = "JOB_DETAIL";

export const fetchJobDetail = (jobid) => {
  return async (dispatch) => {
    axios
      .get(
        `https://www.employmentnewsinindia.com/api/jobs/jobdetail/`+
        jobid
      )
      .then((res) => {
        const job = res.data;
        console.log('action=',job)
        dispatch({ type: JOB_DETAIL, job: job });
      });
  };
};

