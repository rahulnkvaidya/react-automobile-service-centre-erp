import React, { useState, useEffect } from "react";
import axios from "axios";
import { Field, reduxForm, FieldArray, formValueSelector } from "redux-form";
import * as JobListAction from "../store/actions/jobListAction";
import * as CityListAction from "../store/actions/cityAction";
import { useSelector, useDispatch, connect } from "react-redux";
import renderPosts from "../components/renderPosts";
import renderTextarea from "../components/renderTextarea";
import categoryMultiselect from "../components/categoryMultiselect";
import educationMultiselect from "../components/educationMultiselect";
import { ToastContainer, toast } from "react-toastify";
// import CityAutoSuggest from "../components/cityautosuggest";
import Companyautosuggest from "../components/CompanyAutoSuggest/companyautosuggest";
import * as PostAction from "../store/actions/postAction";
import _ from "lodash";
import { title, description, keywords } from "../components/helperFunction";

let InitializeFromStateForm = (props) => {
  const dispatch = useDispatch();
  // console.log(props.posts);
  var initial = [
    {
      _id: "",
      id: 1981,
      companyname: "",
      post: "",
      edu: "",
      pay: "",
      age: ""
    }
  ];
  // data = formfield ////////
  const [cstate, statedetail] = useState('');
  const [data, detail] = useState(initial);
  const [eduval, eduvalUpdate] = useState("");
  const [catval, catvalUpdate] = useState("");
  const [post, postUpdate] = useState([]);
  const [lastpost, lastpostUpdate] = useState("");

  var statecity = useSelector((state) => state.cityData);
 
  const {
    autofill,
    handleSubmit,
    pristine,
    reset,
    submitting,
    official_url,
    companyname,
    employmentnotice,
    lastdate,
    edu,
    category,
    city,
    states,
    posts
  } = props;
  /////// post process ///
  useEffect(()=>{
  //  console.log(city)
    setState();
  },[city])
useEffect(()=>{
  statedetail(statecity)
},[statecity])
  useEffect(() => {
    lastpostUpdate(posts);
    setEmploymentNoticeFor();
    totalvacancyUpdate();
  }, [posts]);
  // console.log('posts =', posts)
  useEffect(() => {
    if (lastpost === undefined) {
    } else {
      //  console.log('po = ', post)
      //  console.log('count =', )
      var polength = lastpost.length - 1;
      if (polength >= 0) {
        //  console.log(polength)
        if (lastpost[polength] === undefined) {
        } else {
          /// get last post for find in database
          var pon = lastpost[polength];
          var poname = pon.post;
          //    console.log('last value 1 =', poname)
          dispatch(PostAction.fetchPostlist(companyname, poname));
        }
      }
    }
  }, [lastpost]);

  var po = useSelector((state) => state.post);
  useEffect(() => {
    detail(po);
  }, [po]);
  // console.log("post = ", po, data);

  // if (post === undefined) {
  // } else {
  //   Object.keys(eduval).map(function(key, index) {
  //     edus.push(edu[key].category);
  //   });
  //   edustring = edus.join();
  // }
  //// post process end /////////
  useEffect(() => {
    eduvalUpdate(edu);
  }, [edu]);
  useEffect(() => {
    catvalUpdate(category);
  }, [category]);

  // console.log('st =', props);
  const autoPost = () => {
    console.log(posts)
    autofill("posts", [posts, { post: 'rahul', edu: 'rahul edu' }]);
  }
  const createMeta = () => {
    autofill("metaTitle", title(companyname, employmentnotice));
    autofill(
      "metaDescription",
      description(companyname, employmentnotice, lastdate)
    );
    autofill(
      "metaKeyword",
      keywords(
        companyname,
        employmentnotice,
        edu,
        category,
        eduval,
        catval,
        city,
        states
      )
    );
  };
  const totalvacancyUpdate = () => {
    if (posts) {
      let total = 0;
      posts.forEach((e) => {
        total = total + Number(e.vac);
        autofill("totalvacancy", total);
      });

    }
  };
  const setState = () => {
    if(city){
      var n = city.length;
      if (n > 4) {
        dispatch(CityListAction.StateSearch(city));
          autofill("state", cstate["statename"]);
      }
    }
  }
  const setEmploymentNoticeFor = () => {
    if (posts) {
      console.log('setemploy =', posts);
      console.log('post = ', typeof (posts));
      var post = "";
      posts.forEach((e) => {
        post = post + e.post + ", ";
        console.log(post);

        // this.profileForm.patchValue({
        //   employmentnotice: post.replace(/,\s*$/, "").replace(/^,|,$/g, "")
        // });
        autofill("employmentnotice", post.replace(/,\s*$/, "").replace(/^,|,$/g, ""));
      });
    }


  };
  let PostRander = (props) => {
    var postsch = props.children;
    if (postsch === null) {
      return <div>null</div>;
    } else {
      return (

        <div className="col-12 mt-2 bg-white">
          {postsch.map((person, index) => (
            <div className="row border border-dark">
              <div className="col-12 p-2">
                {person._id}
              </div>
              <div className="col-12 p-2">{person.post}</div>
              <div className="col-12 p-2"><div dangerouslySetInnerHTML={{ __html: person.edu }} /></div>
            </div>
          ))}
        </div>
      );
    }
  };
  let FormSubmit = (values) => {
    console.log("form Submit = ", values);
    // axios.post(`https://www.employmentnewsinindia.com/api/v2/jobsave`, values)
    // .then(function (response) {
    //   console.log(response);
    //   toast("New Job Sucess");
    // })
    // .catch(function (error) {
    //   console.log(error);
    //   toast(error);
    // });
  };
  return (
    <div>
      <div class="row">
        <div className="col-12 bg-info text-light shadow"><h1>New Job</h1></div>
        <div className="col-4 mb-5">
          <div className="col-12 mt-2">
            <button
              type="button"
              class="btn btn-warning  float-right m-2"
              onClick={autoPost}
            >
              Add Post
        </button>
            <PostRander>{data}</PostRander>
          </div>
        </div>

        <div className="col-8  mb-4 mt-3">
          <form onSubmit={handleSubmit(FormSubmit)}>
            <div className="card shadow">
              <div className="card-body ">
                <div className="form-group row">

                  <div className="col-sm-8">
                    <label
                      for="companyname"
                      class="col-12 col-form-label  m-0 p-0"
                    >
                      Company Name
                    </label>
                    <Field
                      name="companyname"
                      class="form-control"
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
                      for="advertisementno"
                      class="col-12 col-form-label "
                    >
                      Advertisement No.
                    </label>
                    <Field
                      name="advertisementno"
                      class="form-control  "
                      component="input"
                      type="text"
                    />
                  </div>
                  <div class="col-12">
                    <FieldArray
                      name="posts"
                      props={category}
                      component={renderPosts}
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-sm-12">
                    <label for="Tag" class="col-form-label  m-0 p-0">
                      Header
                  </label>
                    <Field
                      name="header"
                      type="text"
                      class="form-control  "
                      component={renderTextarea}
                      type="text"
                    />
                  </div>
                </div>
           
                <div class="form-group row">
                  <div class="col-sm-12">
                    <label for="Tag" class="col-form-label ">
                      How To Apply
                  </label>
                    <Field
                      type="text"
                      name="howToApply"
                      class="form-control  "
                      component={renderTextarea}
                      type="text"
                    />
                  </div>
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
                      for="totalvacancy"
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
                    <label for="city" class="col-form-label  m-0 p-0">
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
                      for="state"
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
                    <label for="edu" class="col-form-label  m-0 p-0">
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
                      for="category"
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
                      for="employmentnotice"
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
                      for="address"
                      class="col-form-label  m-0 p-0"
                    >
                      Address
                    </label>
                    <Field
                      name="address"
                      class="form-control  "
                      component="textarea"
                      type="textarea"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-6">
                    <label for="pin" class="col-form-label  m-0 p-0">
                      Pin Code
                    </label>
                    <Field
                      name="pin"
                      class="form-control  "
                      component="input"
                      type="text"
                    />
                  </div>
                  <div class="col-sm-6">
                    <label
                      for="salary"
                      class="col-form-label  m-0 p-0"
                    >
                      Salary
                    </label>
                    <Field
                      name="salary"
                      class="form-control  "
                      component="input"
                      type="text"
                    />
                  </div>
                </div>
                <button onClick={createMeta}>Create Meta</button>
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
                  <div class="col-sm-12">
                    <button
                      type="submit"
                      class="btn btn-warning "
                      disabled={pristine || submitting}
                    >
                      Submit
                  </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const form = "NewJobForm";
const selector = formValueSelector(form);

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
InitializeFromStateForm = reduxForm({
  form: form // a unique identifier for this form
})(InitializeFromStateForm);

// You have to connect() to any reducers that you wish to connect to yourself
InitializeFromStateForm = connect((state) => {
  const states = selector(state, "state");
  const {
    official_url,
    companyname,
    posts,
    city,
    employmentnotice,
    lastdate,
    edu,
    category
  } = selector(
    state,
    "official_url",
    "companyname",
    "posts",
    "city",
    "employmentnotice",
    "lastdate",
    "edu",
    "category"
  );
  return {
    official_url,
    companyname,
    posts,
    city,
    employmentnotice,
    lastdate,
    edu,
    category,
    states
  };
})(InitializeFromStateForm);

export default InitializeFromStateForm;
