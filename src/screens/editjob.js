import React, { useState, useEffect } from "react";
import axios from "axios";
import { Field, reduxForm, FieldArray } from "redux-form";
import * as jobDetailAction from "../store/actions/jobDetailAction";
import { useSelector, useDispatch, connect } from "react-redux";
import { load as loadAccount } from "../store/editForm";
import renderPosts from "../components/renderPosts";
import renderTextarea from "../components/renderTextarea";
import categoryMultiselect from "../components/categoryMultiselect";
import educationMultiselect from "../components/educationMultiselect";
import { toast } from "react-toastify";
import Companyautosuggest from "../components/CompanyAutoSuggest/companyautosuggest";

let InitializeFromStateForm = (props) => {
  // data = formfield ////////
  const [data, detail] = useState([]);
 
  // console.log(props);
  const { handleSubmit, load, pristine, submitting } = props;
  const dispatch = useDispatch();
  var jobid = props.match.params.jobid;
  //// fatch job by id
  var fav = useSelector((state) => state.job);
  useEffect(() => {
    console.log(jobid);
    dispatch(jobDetailAction.fetchJobDetail(jobid));
    
  }, [dispatch, fav, jobid]);

  //  get job detail form reducer ///////
  
   useEffect(() => {
     detail(fav);
   }, [fav]);
  var jobLoad = () => {
    console.log(data);
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
        <div className='mt-5 pt-4'> 
          <button type="button" onClick={() => jobLoad()}>
            Load Account
          </button>
        </div>

        <div class="row">
          <div class="mt-4 col-12  mb-5">
            <div class="card shadow">
              <div class="card-body ">
                <div class="form-group row">
                  <div class="col-sm-8">
                    <label
                      for="jobid"
                      class="col-12 col-form-label   m-0 p-0"
                    >
                      Job Id
                    </label>

                    <Field
                      name="jobid"
                      class="form-control  "
                      component="input"
                      type="text"
                    />
                  </div>
                  
                  <div class="col-sm-8">
                    <label
                      for="companyname"
                      class="col-12 col-form-label  m-0 p-0"
                    >
                      Company Name
                    </label>
                    <Field
                      name="companyname"
                      class="form-control  "
                      component="input"
                      type="text"
                    />
                    <Field
                      name="companyname"
                      class="form-control  "
                      component={Companyautosuggest}
                      type="text"
                    />
                  </div>
                  <div class="col-sm-12">
                    <label
                      for="official_url"
                      class="col-12 col-form-label "
                    >
                      Official Url
                    </label>
                    <Field
                      name="official_url"
                      class="form-control  "
                      component="input"
                      type="text"
                    />
                  </div>
                  <div class="col-sm-12">
                    <label
                      for="applicationFormUrl"
                      class="col-12 col-form-label "
                    >
                      Application Form Url
                    </label>
                    <Field
                      name="applicationFormUrl"
                      class="form-control  "
                      component="input"
                      type="text"
                    />
                  </div>
                  <div class="col-sm-12">
                    <label
                      for="applyOnlineLink"
                      class="col-12 col-form-label "
                    >
                      Apply Online Link
                    </label>
                    <Field
                      name="applyOnlineLink"
                      class="form-control  "
                      component="input"
                      type="text"
                    />
                  </div>
                  <div class="col-sm-12">
                    <label
                      for="companyname"
                      class="col-12 col-form-label "
                    >
                      Advertisement No.
                    </label>
                    <Field
                      name="companyname"
                      class="form-control  "
                      component="input"
                      type="text"
                    />
                  </div>
                </div>
                <div class="col-12">
                    <FieldArray name="posts" component={renderPosts} />
                  </div>
                <div class="col-sm-12">
                  <label for="Tag" class="col-form-label  m-0 p-0">
                    Header
                  </label>
                  <Field
                    name="header"
                    type="text"
                    class="form-control  "
                    component={renderTextarea}
                  />
                </div>
                
                <div class="col-sm-12">
                  <label for="Tag" class="col-form-label  m-0 p-0">
                    How To Apply
                  </label>
                  <Field
                    type="text"
                    name="howToApply"
                    class="form-control  "
                    component={renderTextarea}
                  />
                </div>

                <div class="form-group row">
                  <div class="col-sm-6">
                    <label
                      for="lastdate"
                      class="col-form-label  m-0 p-0"
                    >
                      Last Date
                    </label>
                    <Field
                      name="lastdate"
                      class="form-control  "
                      component="input"
                      type="text"
                    />
                  </div>
                  <div class="col-sm-4">
                    <label
                      for="companyname"
                      class="col-form-label  m-0 p-0"
                    >
                      Total Vacancy
                    </label>
                    <div class="row">
                      <div class="col-sm-6">
                        <Field
                          name="totalvacancy"
                          class="form-control  "
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
                      class="col-form-label  m-0 p-0"
                    >
                      City
                    </label>
                    <Field
                      name="city"
                      class="form-control  "
                      component="input"
                      type="text"
                    />
                  </div>
                  <div class="col-sm-4">
                    <label
                      for="companyname"
                      class="col-form-label  m-0 p-0"
                    >
                      State
                    </label>
                    <Field
                      name="state"
                      class="form-control  "
                      component="input"
                      type="text"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-12">
                    <label
                      for="companyname"
                      class="col-form-label  m-0 p-0"
                    >
                      Education
                    </label>
                    <Field
                      name="edu"
                      class="form-control  "
                      component={educationMultiselect}
                      type="text"
                    />
                  </div>
                  <div class="col-sm-12 mt-5">
                    <label
                      for="companyname"
                      class="col-form-label  m-0 p-0"
                    >
                      Category
                    </label>
                    <Field
                      name="category"
                      class="form-control  "
                      component={categoryMultiselect}
                      type="text"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-sm-6">
                    <label
                      for="companyname"
                      class="col-form-label  m-0 p-0"
                    >
                      Employment Notice For
                    </label>
                    <Field
                      name="employmentnotice"
                      class="form-control  "
                      component="textarea"
                      type="text"
                    />
                  </div>
                  <div class="col-sm-6">
                    <label
                      for="companyname"
                      class="col-form-label  m-0 p-0"
                    >
                      Address
                    </label>
                    <Field
                      name="companyname"
                      class="form-control  "
                      component="textarea"
                      type="textarea"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-6">
                    <label
                      for="companyname"
                      class="col-form-label  m-0 p-0"
                    >
                      Pin Code
                    </label>
                    <Field
                      name="companyname"
                      class="form-control  "
                      component="input"
                      type="text"
                    />
                  </div>
                  <div class="col-sm-6">
                    <label
                      for="companyname"
                      class="col-form-label  m-0 p-0"
                    >
                      Salary
                    </label>
                    <Field
                      name="companyname"
                      class="form-control  "
                      component="input"
                      type="text"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-12">
                    <label
                      for="metaTitle"
                      class="col-form-label  m-0 p-0"
                    >
                      Meta Title
                    </label>
                    <Field
                      name="metaTitle"
                      rows="2"
                      class="form-control  "
                      component="textarea"
                      type="text"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-12">
                    <label
                      for="metaDescription"
                      class="col-form-label  m-0 p-0"
                    >
                      Meta Description
                    </label>
                    <Field
                      name="metaDescription"
                      rows="4"
                      class="form-control  "
                      component="textarea"
                      type="text"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-12">
                    <label
                      for="metaKeyword"
                      class="col-form-label  m-0 p-0"
                    >
                      Meta Keywords
                    </label>
                    <Field
                      name="metaKeyword"
                      rows="4"
                      class="form-control  "
                      component="textarea"
                      type="text"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-sm-12">
                    <label
                      for="schedule"
                      class="col-form-label  m-0 p-0"
                    >
                      Schedule Job
                    </label>
                    <Field
                      name="schedule"
                      type="datetime-local"
                      class="form-control  "
                      component="input"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <button
                    type="submit"
                    class=" btn btn-warning "
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
