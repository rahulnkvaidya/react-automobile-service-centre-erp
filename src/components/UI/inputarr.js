import React from "react";

export default function inputarr(props) {
    console.log(props.children)
  return (
    <div>
      <input type="text" value={props.children.cat.category} />
    </div>
  );
}
