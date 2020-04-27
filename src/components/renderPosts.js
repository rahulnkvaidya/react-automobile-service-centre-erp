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
    <div class="col-12">
      <button
        type="button"
        class="btn btn-warning text-light float-right m-2"
        onClick={() => fields.push({})}
      >
        Add Post
      </button>
      {submitFailed && error && <span>{error}</span>}

      {fields.map((member, index) => (
        <div key={index}>
          <div class="row">
            <div class="col-6">
              <div class="form-group">
                <label
                  for="applicationFormUrl"
                  class="col-6 text-light col-form-label"
                >
                  Post #{index + 1} Post
                </label>
                <Field
                  name={`${member}.post`}
                  class="col-12 form-control text-light bg-dark"
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
                  class="col-12 text-light col-form-label"
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
            <div class="col-3">
              <div class="form-group">
                <button
                  type="button"
                  class=" btn btn-warning text-light"
                  title="Remove Member"
                  onClick={() => fields.remove(index)}
                >
                  Remove Post
                </button>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label
              for="applicationFormUrl"
              class="col-12 text-light col-form-label"
            >
              Education
            </label>
            <Field
              name={`${member}.edu`}
              class="form-control"
              type="text"
              component={renderTextarea}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default renderPosts;
