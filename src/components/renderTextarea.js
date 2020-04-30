import React from "react";
import CKEditor from "ckeditor4-react";

export default function renderTextarea({ input }) {
  // console.log("input");
  // console.log(input);
  let onEditorChange = (evt) => {
    var data = evt.editor.getData();
    // console.log(data);
    input.onChange(data);
  }
  return (

    <CKEditor
      data={input.value}
      class="form-control text-light bg-dark"
      onChange={evt => onEditorChange(evt)}

    />
  );
}
