import React from "react";
import { Field } from "redux-form";
import renderInput from "./renderInput";
import renderTextarea from "./renderTextarea";

let renderPosts = ({ fields, meta: { error, submitFailed } }) => {
  // const dispatch = useDispatch();

  // var postOnChange = (value) => {
  //   console.log(value.target.value);
  //   dispatch(PostAction.fetchPostChange(value.target.value));
  // };

  return (
    <div className="col-12 border border-primary round-circle m-1 p-1">
      <div className="col-12">
        <button
          type="button"
          class="btn btn-warning float-right m-2"
          onClick={() => fields.push({})}
        >
          Add Post
      </button>

      </div>

      {submitFailed && error && <span>{error}</span>}

      {fields.map((member, index) => (
        <div key={index}>
          <div class="row">
            <div class="col-6">
              <div class="form-group">
                <label
                  for="applicationFormUrl"
                  class="col-6 col-form-label"
                >
                  Post #{index + 1} Post
                </label>
                <Field
                  name={`${member}.post`}
                  class="col-12 form-control "
                  type="text"
                  component={renderInput}
                //   onChange={(newValue) => postOnChange(newValue)}
                />
              </div>
            </div>
            <div class="col-3">
              <div class="form-group">
                <label
                  for="applicationFormUrl"
                  class="col-12 col-form-label"
                >
                  Vacancy
                </label>
                <Field
                  name={`${member}.vac`}
                  class="form-control"
                  type="text"
                  component={renderInput}
                />
              </div>
            </div>

          </div>

          <div class="form-group">
            <label
              for="applicationFormUrl"
              class="col-12 col-form-label"
            >
              Education
            </label>
            <div class="form-group row">
              <div class="col-sm-12">
                <Field
                  name={`${member}.edu`}
                  class="form-control"
                  type="text"
                  component={renderTextarea}
                />
              </div>
            </div>
            <div class="form-group">
              <div class="col-12">
                <div class="form-group">
                  <label
                    for="applicationFormUrl"
                    class="col-6 col-form-label"
                  >
                    Pay
                </label>
                  <Field
                    name={`${member}.pay`}
                    class="col-12 form-control "
                    type="text"
                    component={renderInput}
                  //   onChange={(newValue) => postOnChange(newValue)}
                  />
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="col-12">
                <div class="form-group">
                  <label
                    for="applicationFormUrl"
                    class="col-6 col-form-label"
                  >
                    Age
                </label>
                  <Field
                    name={`${member}.age`}
                    class="col-12 form-control "
                    type="text"
                    component={renderInput}
                  //   onChange={(newValue) => postOnChange(newValue)}
                  />
                </div>
              </div>
            </div>
            <div class="col-12 bg-light">
              <div class="form-group">
                <button
                  type="button"
                  class="btn btn-warning text-light"
                  title="Remove Member"
                  onClick={() => fields.remove(index)}
                >
                  Remove Post
                </button>
                <button
                  type="button"
                  class="btn btn-info float-right"
                  onClick={() => fields.push({})}
                >
                  Add Post
      </button>
              </div>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};

export default renderPosts;
