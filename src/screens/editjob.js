import React, { useState, useEffect } from "react";
import axios from "axios";
import { Field, reduxForm, FieldArray } from "redux-form";
import * as JobListAction from "../store/actions/jobListAction";
import { useSelector, useDispatch, connect } from "react-redux";
import { load as loadAccount } from "../store/editForm";
import renderPosts from "../components/renderPosts";
import renderTextarea from "../components/renderTextarea";
import categoryMultiselect from "../components/categoryMultiselect";
import educationMultiselect from "../components/educationMultiselect";
import { ToastContainer, toast } from "react-toastify";
import CityAutoSuggest from '../components/cityautosuggest';
import Companyautosuggest from "../components/CompanyAutoSuggest/companyautosuggest";

let InitializeFromStateForm = (props) => {
  // data = formfield ////////
  const [data, detail] = useState([]);
  const [postsdata, postUpdate] = useState([]);
  // console.log(props);
  const { handleSubmit, load, pristine, reset, submitting } = props;
  const dispatch = useDispatch();
  var jobid = props.match.params.jobid;
  //// fatch job by id
  useEffect(() => {
    dispatch(JobListAction.fetchJobDetail(jobid));
  }, [dispatch, fav]);

  //  get job detail form reducer ///////
  var fav = useSelector((state) => state.jobList);
   useEffect(() => {
     detail(fav);
   }, [fav]);
  var jobLoad = () => {
    load(data);
  };

  let FormSubmit = (values) => {
  //  console.log(values);
    axios.post(`https://www.employmentnewsinindia.com/api/jobs/jobedit`, values)
    .then(function (response) {
      console.log(response);
      toast("Job Edit Sucess");
    })
    .catch(function (error) {
      console.log(error);
      toast(error);
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(FormSubmit)}>
        <div>
          <button type="button" onClick={() => jobLoad()}>
            Load Account
          </button>
        </div>

        <div class="row">
          <div class="mt-4 col-12 bg-dark mb-5">
            <div class="card shadow">
              <div class="card-body bg-dark">
                <div class="form-group row">
                  <div class="col-sm-8">
                    <label
                      for="jobid"
                      class="col-12 col-form-label text-light  m-0 p-0"
                    >
                      Job Id
                    </label>

                    <Field
                      name="jobid"
                      class="form-control text-light bg-dark"
                      component="input"
                      type="text"
                    />
                  </div>
                  
                  <div class="col-sm-8">
                    <label
                      for="companyname"
                      class="col-12 col-form-label text-light m-0 p-0"
                    >
                      Company Name
                    </label>
                    <Field
                      name="companyname"
                      class="form-control text-light bg-dark"
                      component="input"
                      type="text"
                    />
                    <Field
                      name="companyname"
                      class="form-control text-light bg-dark"
                      component={Companyautosuggest}
                      type="text"
                    />
                  </div>
                  <div class="col-sm-12">
                    <label
                      for="official_url"
                      class="col-12 col-form-label text-light"
                    >
                      Official Url
                    </label>
                    <Field
                      name="official_url"
                      class="form-control text-light bg-dark"
                      component="input"
                      type="text"
                    />
                  </div>
                  <div class="col-sm-12">
                    <label
                      for="applicationFormUrl"
                      class="col-12 col-form-label text-light"
                    >
                      Application Form Url
                    </label>
                    <Field
                      name="applicationFormUrl"
                      class="form-control text-light bg-dark"
                      component="input"
                      type="text"
                    />
                  </div>
                  <div class="col-sm-12">
                    <label
                      for="applyOnlineLink"
                      class="col-12 col-form-label text-light"
                    >
                      Apply Online Link
                    </label>
                    <Field
                      name="applyOnlineLink"
                      class="form-control text-light bg-dark"
                      component="input"
                      type="text"
                    />
                  </div>
                  <div class="col-sm-12">
                    <label
                      for="companyname"
                      class="col-12 col-form-label text-light"
                    >
                      Advertisement No.
                    </label>
                    <Field
                      name="companyname"
                      class="form-control text-light bg-dark"
                      component="input"
                      type="text"
                    />
                  </div>
                </div>
                <div class="col-12">
                    <FieldArray name="posts" component={renderPosts} />
                  </div>
                <div class="col-sm-12">
                  <label for="Tag" class="col-form-label text-light m-0 p-0">
                    Header
                  </label>
                  <Field
                    name="header"
                    type="text"
                    class="form-control text-light bg-dark"
                    component={renderTextarea}
                    type="text"
                  />
                </div>
                <div class="col-sm-12">
                  <label for="Tag" class="col-form-label text-light m-0 p-0">
                    Full Description
                  </label>

                  <Field
                    name="fulldescription"
                    type="text"
                    class="form-control text-light bg-dark"
                    component={renderTextarea}
                    type="text"
                  />
                </div>
                <div class="col-sm-12">
                  <label for="Tag" class="col-form-label text-light m-0 p-0">
                    How To Apply
                  </label>
                  <Field
                    type="text"
                    name="howToApply"
                    class="form-control text-light bg-dark"
                    component={renderTextarea}
                    type="text"
                  />
                </div>

                <div class="form-group row">
                  <div class="col-sm-6">
                    <label
                      for="lastdate"
                      class="col-form-label text-light m-0 p-0"
                    >
                      Last Date
                    </label>
                    <Field
                      name="lastdate"
                      class="form-control text-light bg-dark"
                      component="input"
                      type="text"
                    />
                  </div>
                  <div class="col-sm-4">
                    <label
                      for="companyname"
                      class="col-form-label text-light m-0 p-0"
                    >
                      Total Vacancy
                    </label>
                    <div class="row">
                      <div class="col-sm-6">
                        <Field
                          name="totalvacancy"
                          class="form-control text-light bg-dark"
                          component="input"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-4">
                    <label
                      for="companyname"
                      class="col-form-label text-light m-0 p-0"
                    >
                      City
                    </label>
                    <Field
                      name="city"
                      class="form-control text-light bg-dark"
                      component="input"
                      type="text"
                    />
                  </div>
                  <div class="col-sm-4">
                    <label
                      for="companyname"
                      class="col-form-label text-light m-0 p-0"
                    >
                      State
                    </label>
                    <Field
                      name="state"
                      class="form-control text-light bg-dark"
                      component="input"
                      type="text"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-12">
                    <label
                      for="companyname"
                      class="col-form-label text-light m-0 p-0"
                    >
                      Education
                    </label>
                    <Field
                      name="edu"
                      class="form-control text-light bg-dark"
                      component={educationMultiselect}
                      type="text"
                    />
                  </div>
                  <div class="col-sm-12 mt-5">
                    <label
                      for="companyname"
                      class="col-form-label text-light m-0 p-0"
                    >
                      Category
                    </label>
                    <Field
                      name="category"
                      class="form-control text-light bg-dark"
                      component={categoryMultiselect}
                      type="text"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-sm-6">
                    <label
                      for="companyname"
                      class="col-form-label text-light m-0 p-0"
                    >
                      Employment Notice For
                    </label>
                    <Field
                      name="employmentnotice"
                      class="form-control text-light bg-dark"
                      component="textarea"
                      type="text"
                    />
                  </div>
                  <div class="col-sm-6">
                    <label
                      for="companyname"
                      class="col-form-label text-light m-0 p-0"
                    >
                      Address
                    </label>
                    <Field
                      name="companyname"
                      class="form-control text-light bg-dark"
                      component="textarea"
                      type="textarea"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-6">
                    <label
                      for="companyname"
                      class="col-form-label text-light m-0 p-0"
                    >
                      Pin Code
                    </label>
                    <Field
                      name="companyname"
                      class="form-control text-light bg-dark"
                      component="input"
                      type="text"
                    />
                  </div>
                  <div class="col-sm-6">
                    <label
                      for="companyname"
                      class="col-form-label text-light m-0 p-0"
                    >
                      Salary
                    </label>
                    <Field
                      name="companyname"
                      class="form-control text-light bg-dark"
                      component="input"
                      type="text"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-12">
                    <label
                      for="metaTitle"
                      class="col-form-label text-light m-0 p-0"
                    >
                      Meta Title
                    </label>
                    <Field
                      name="metaTitle"
                      rows="2"
                      class="form-control text-light bg-dark"
                      component="textarea"
                      type="text"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-12">
                    <label
                      for="metaDescription"
                      class="col-form-label text-light m-0 p-0"
                    >
                      Meta Description
                    </label>
                    <Field
                      name="metaDescription"
                      rows="4"
                      class="form-control text-light bg-dark"
                      component="textarea"
                      type="text"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-12">
                    <label
                      for="metaKeyword"
                      class="col-form-label text-light m-0 p-0"
                    >
                      Meta Keywords
                    </label>
                    <Field
                      name="metaKeyword"
                      rows="4"
                      class="form-control text-light bg-dark"
                      component="textarea"
                      type="text"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-sm-12">
                    <label
                      for="schedule"
                      class="col-form-label text-light m-0 p-0"
                    >
                      Schedule Job
                    </label>
                    <Field
                      name="schedule"
                      type="datetime-local"
                      class="form-control text-light bg-dark"
                      component="input"
                      type="text"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <button
                    type="submit"
                    class=" btn btn-warning text-light"
                    disabled={pristine || submitting}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
InitializeFromStateForm = reduxForm({
  form: "initializeFromState" // a unique identifier for this form
})(InitializeFromStateForm);

// You have to connect() to any reducers that you wish to connect to yourself
InitializeFromStateForm = connect(
  (state) => ({
    initialValues: state.EditForm.data // pull initial values from account reducer
  }),
  { load: loadAccount } // bind account loading action creator
)(InitializeFromStateForm);

export default InitializeFromStateForm;
