//import jobs from '../../models/product';
import axios from "axios";
export const SEARCH_LIST = "SEARCH_LIST";

export const fetchSearchlist = (startfrom, order) => {
//  console.log(startfrom)
  return async (dispatch) => {
    axios
      .get(
        `https://vqepvomb9h.execute-api.ap-south-1.amazonaws.com/latest/api/elasticsearch/v2/alljobs/?size=10&from=`+
        startfrom + `&order=` +
        order
      )
      .then((res) => {
   //     console.log('1 = ' +res)
        const persons = res.data;
        dispatch({ type: SEARCH_LIST, jobs: persons });
      });
  };
};

export const searchDelete = (startfrom, order, jobid) => {
  console.log(jobid)
  return async (dispatch) => {
    axios
      .delete(
        `https://vqepvomb9h.execute-api.ap-south-1.amazonaws.com/latest/api/elasticsearch/delete?jobid=`+ jobid
      )
      .then((res) => {
       // console.log('delete res = '+ JSON.stringify(res))
        axios
        .get(
          `https://vqepvomb9h.execute-api.ap-south-1.amazonaws.com/latest/api/elasticsearch/v2/alljobs/?size=10&from=`+
          startfrom + `&order=` +
          order
        )
        .then((res) => {
          console.log('1 = ' +res)
          const persons = res.data;
          dispatch({ type: SEARCH_LIST, jobs: persons });
        });
      });
  };
};