import React from 'react'

export default function renderInput({ input, label, type, meta: { touched, error } }) {
 // console.log(input);
    return (
            <div class="form-group">
              <div class="col-12 m-0">
                <input {...input}  class="form-control" type={type} placeholder={label} />
                {touched && error && <span>{error}</span>}
              </div>
            </div>
    )
}
