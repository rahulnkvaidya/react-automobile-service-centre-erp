import React from 'react'

export default function renderInput({ input, label, type, meta: { touched, error } }) {
    return (
            <div class="form-group">
              <label class="col-12 text-light col-form-label">{label}</label>
              <div class="col-12">
                <input {...input}  class="col-12 form-control text-light bg-dark" type={type} placeholder={label} />
                {touched && error && <span>{error}</span>}
              </div>
            </div>
    )
}
