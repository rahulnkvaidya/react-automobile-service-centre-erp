import React from 'react'
import { Field, reduxForm, FieldArray, FormSection } from "redux-form";
import renderInput from './renderInput';
import renderTextarea from './renderTextarea';

export default function ({ fields, meta: { error, submitFailed } }) {
    return (
            <div>
              <button type="button" class="btn btn-warning text-light float-right m-2" onClick={() => fields.push({})}>
                Add Post
              </button>
              {submitFailed && error && <span>{error}</span>}
          
              {fields.map((member, index) => (
                <div key={index}>
                  <button
                    type="button"
                    class="btn btn-warning text-light float-right m-2"
                    title="Remove Member"
                    onClick={() => fields.remove(index)}
                  >  Remove Post
                  </button>
                  <h4>Post #{index + 1}</h4>
                  <div class="col-12">
                    <label for="applicationFormUrl" class="col-12 text-light col-form-label">
                      Post
                    </label>
                    <Field
                      name={`${member}.post`}
                      class="col-12 form-control text-light bg-dark"
                      type="text"
                      component={renderInput}
                    />
                  </div>
                  <div class="col-2">
                    <label for="applicationFormUrl" class="col-12 text-light col-form-label">
                      Vacancy
                    </label>
                    <Field
                      name={`${member}.vac`}
                      class="col-12 form-control text-light bg-dark"
                      type="text"
                      component={renderInput}
                    />
                  </div>
                  <div class="col-2">
                    <label for="applicationFormUrl" class="col-12 text-light col-form-label">
                      Education
                    </label>
                    <Field
                      name={`${member}.edu`}
                      class="col-12 form-control text-light bg-dark"
                      type="text"
                      component={renderTextarea}
                    />
                  </div>
                </div>
              ))}
            </div>
        
    )
}
