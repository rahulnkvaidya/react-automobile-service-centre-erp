import axios from "axios";
export const JOB_LIST = "JOB_LIST";

export const fetchJoblist = (pageno) => {
  return async (dispatch) => {
    axios
      .get(
        `https://www.employmentnewsinindia.com/api/jobs/joblist?page=`+
        pageno
      )
      .then((res) => {
        const persons = res.data;
        dispatch({ type: JOB_LIST, jobs: persons });
      });
  };
};