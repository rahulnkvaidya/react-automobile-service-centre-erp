import React from "react";

import { getFormValues } from "redux-form";
import { connect } from "react-redux";

const SimpleTable = ({ values }) => {
    console.log('sample form data start')
    console.log(values);
    console.log('data end')
  return <div>hello</div>;
};

export default connect((state) => ({
  values: getFormValues("initializeFromState")(state)
}))(SimpleTable);
