import React from 'react'

export default function renderTextarea({ input, label, type, meta: { touched, error } }) {
    return (
            <div class="form-group">
              <label class="col-12 text-light col-form-label">{label}</label>
              <div class="col-12">
                <textarea  {...input}  class="form-control text-light bg-dark"  rows="5" type={type} placeholder={label} />
                {touched && error && <span>{error}</span>}
              </div>
            </div>

    )
}
