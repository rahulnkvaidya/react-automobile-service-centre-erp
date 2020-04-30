import React, { useState, useEffect, useCallback } from "react";
import * as SearchJob from "../store/actions/searchAction";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { ToastContainer, toast } from "react-toastify";
import { getPager } from "../components/pagination";

const ComplexList = () => {
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
    dispatch(SearchJob.fetchSearchlist(pagination.nextPage, order));
  });
  useEffect(() => {
    dispatch(SearchJob.fetchSearchlist(0, order));
  }, [dispatch, fav]);
  var fav = useSelector((state) => state.red);
  useEffect(() => {
    detail(fav);
  }, [fav]);
  const ButtonNext = useCallback(() => {
    newcp(pagination.nextPage);
    dispatch(SearchJob.fetchSearchlist(pagination.nextIndex, order));
  });
  const ButtonPrev = useCallback(() => {
    newcp(pagination.previousPage);
    dispatch(SearchJob.fetchSearchlist(pagination.previousIndex, order));
  });

  const deleteJob = useCallback((jobid) => {
    dispatch(SearchJob.searchDelete(pagination.previousIndex, order, jobid));
    toast("Delete Success = " + jobid, { containerId: "A" });
  });
  if (_.isEmpty(data)) {
    return <div>loading..........</div>;
  } else {
    var list = data.hits.hits;
    var total = data.hits.total.value;
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
        <div className="col-12 shadow">
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
                <button
                  className="btn btn-success p-1 m-1"
                  onClick={() => ResultOrder()}
                >
                  Order {order}
                </button>
                <span className="p-1">Total Page - {pagination.totalPages}</span>
                <span className="p-1">
                  Total Result - {pagination.totalItems}
                </span>
                <span className="p-1">startIndex - {pagination.startIndex}</span>
                <span className="p-1">endIndex - {pagination.endIndex}</span>
                <span className="p-1">
                  previousIndex - {pagination.previousIndex}
                </span>
                <span className="p-1">
                  nextIndex - {pagination.nextIndex}
                </span>
              </div>
            </div>
          </div>
          <div className="col-12"><h1>Elastic Search Server</h1></div>
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
                <div className="col-4 p-2">{person._id}</div>
                <div className="col-4 p-2">
                  {person._source.results.companyname}
                </div>
                <div className="col-2 p-2">{person._source.results.lastdate}</div>
                <div className="col-2 p-2">
                  <button
                    className="btn btn-secondary"
                    onClick={() => deleteJob(person._id)}
                  >
                    Delete
                </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default ComplexList;
