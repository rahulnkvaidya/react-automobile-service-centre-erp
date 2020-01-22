import React, { useState, useEffect, useCallback } from "react";
import * as JobListAction from "../store/actions/jobListAction";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { ToastContainer, toast } from "react-toastify";
import { getPager } from "../components/pagination";
import Logo from '../components/logo';
const JobList = () => {
  toast.configure({
    autoClose: 8000,
    draggable: false
    //etc you get the idea
  });
  const [data, detail] = useState([]);
  const [currentPage, newcp] = useState(0);
  const [order, orderChange] = useState("asc");
  const dispatch = useDispatch();

  const ResultOrder = useCallback(() => {
    orderChange("desc");
    // newcp(pagination.nextPage);
    dispatch(JobListAction.fetchJoblist(pagination.nextPage, order));
  });
  useEffect(() => {
    dispatch(JobListAction.fetchJoblist(1));
  }, [dispatch, fav]);
  var fav = useSelector((state) => state.jobList);
  console.log(fav);
  useEffect(() => {
    detail(fav);
  }, [fav]);
  const ButtonNext = useCallback(() => {
    newcp(pagination.nextPage);
    dispatch(JobListAction.fetchJoblist(pagination.nextPage));
  });
  const ButtonPrev = useCallback(() => {
    newcp(pagination.previousPage);
    dispatch(JobListAction.fetchJoblist(pagination.previousPage));
  });

  if (_.isEmpty(data)) {
    return <div>loading..........</div>;
  } else {
    var list = data.data;
    console.log(list);
    var total = data.count;
    console.log(total);
    var pagination = getPager(total, currentPage, 10);
    var shouldDisablePostButton = true;
    var shouldDisablenextButton = true;
    if (pagination.previousPage > 0) {
      shouldDisablePostButton = false;
    }
    if (pagination.currentPage < pagination.endPage) {
      shouldDisablenextButton = false;
    }
    return (
      <div className="row p-2">
        <ToastContainer
          enableMultiContainer
          containerId={"A"}
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
        <div className="row">
          <div className="col-12 mb-2 mt-2">
            <div className="col-12 p-1 border border-dark">
              <button
                onClick={() => ButtonPrev()}
                disabled={shouldDisablePostButton}
                className="btn btn-success p-1 m-1"
              >
                Previous
              </button>
              <span className="p-1">
                Current Page - {pagination.currentPage}
              </span>
              <button
                className="btn btn-success p-1 m-1"
                disabled={shouldDisablenextButton}
                onClick={() => ButtonNext()}
              >
                Next
              </button>
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="row text-light bg-dark">
            <div className="col-4 p-2">Jobid</div>
            <div className="col-4 p-2">Company Name</div>
            <div className="col-2 p-2">Last Date</div>
            <div className="col-2 p-2">Function</div>
          </div>
        </div>
        <div className="col-12 mt-2">
          {list.map((person, index) => (
            <div className="row">
              <div className="col-4 p-2">
                {person._id}
                <Logo>{person.logo}</Logo>
              </div>
              <div className="col-4 p-2">
                {person.companyname},
                <br /> Update time = {person.updated_at}
              </div>
              <div className="col-2 p-2">{person.lastdate}</div>
              <div className="col-2 p-2">{person.schedule}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default JobList;
