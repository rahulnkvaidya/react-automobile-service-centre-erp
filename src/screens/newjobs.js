import React, { useState, useEffect, useCallback } from "react";
import { Formik, Field, Form, FieldArray } from "formik";
import Button from "../components/Button/Button";
import Input from "../components/UI/Input";

const Newjobs = () => {
  var formfield = {
    orderForm: {
      jobid: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Jobid"
        },
        value: ""
      },
      category: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street"
        },
        value: ""
      }
      // edu: {
      //   elementType: "input",
      //   elementConfig: {
      //     type: "text",
      //     placeholder: "ZIP Code"
      //   },
      //   value: ""
      // },
      // post: {
      //   elementType: "input",
      //   elementConfig: {
      //     type: "text",
      //     placeholder: "Country"
      //   },
      //   value: ""
      // },
      // companyname: {
      //   elementType: "input",
      //   elementConfig: {
      //     type: "text",
      //     placeholder: "companyname"
      //   },
      //   value: ""
      // },
      // lastdate: {
      //   elementType: "input",
      //   elementConfig: {
      //     type: "text",
      //     placeholder: "lastdate"
      //   },
      //   value: ""
      // },
      // advertisementno: {
      //   elementType: "input",
      //   elementConfig: {
      //     type: "text",
      //     placeholder: "advertisementno"
      //   },
      //   value: ""
      // },
      // fulldescription: {
      //   elementType: "input",
      //   elementConfig: {
      //     type: "text",
      //     placeholder: "fulldescription"
      //   },
      //   value: ""
      // },
      // salary: {
      //   elementType: "input",
      //   elementConfig: {
      //     type: "text",
      //     placeholder: "salary"
      //   },
      //   value: ""
      // },
      // header: {
      //   elementType: "textarea",
      //   elementConfig: {
      //     type: "text",
      //     placeholder: "header"
      //   },
      //   value: ""
      // },
      // howToApply:{
      //   elementType: "textarea",
      //   elementConfig: {
      //     type: "text",
      //     placeholder: "howToApply"
      //   },
      //   value: ""
      // },
      // official_url:{
      //   elementType: "input",
      //   elementConfig: {
      //     type: "text",
      //     placeholder: "official_url"
      //   },
      //   value: ""
      // },
      // address: {
      //   elementType: "input",
      //   elementConfig: {
      //     type: "text",
      //     placeholder: "address"
      //   },
      //   value: ""
      // },
      // pin: {
      //   elementType: "input",
      //   elementConfig: {
      //     type: "text",
      //     placeholder: "pin"
      //   },
      //   value: ""
      // },
      // city: {
      //   elementType: "input",
      //   elementConfig: {
      //     type: "text",
      //     placeholder: "city"
      //   },
      //   value: ""
      // },
      // state: {
      //   elementType: "input",
      //   elementConfig: {
      //     type: "text",
      //     placeholder: "state"
      //   },
      //   value: ""
      // },

      // employmentnotice: {
      //   elementType: "select",
      //   elementConfig: {
      //     options: [
      //       { value: "fastest", displayValue: "Fastest" },
      //       { value: "cheapest", displayValue: "Cheapest" }
      //     ]
      //   },
      //   value: ""
      // }
    },
    loading: false
  };
  const [data, detail] = useState(formfield);

  const orderHandler = (event) => {
    console.log("on submit");
    event.preventDefault();
    detail({ loading: true });
    const formData = {};
    for (let formElementIdentifier in data.orderForm) {
      formData[formElementIdentifier] =
        data.orderForm[formElementIdentifier].value;
    }
    const order = {
      orderData: formData
    };
    console.log(order);
  };
  const inputChangedHandler = (event, inputIdentifier) => {
    const updatedOrderForm = {
      ...data.orderForm
    };
    const updatedFormElement = {
      ...updatedOrderForm[inputIdentifier]
    };
    updatedFormElement.value = event.target.value;
    updatedOrderForm[inputIdentifier] = updatedFormElement;
    detail({ orderForm: updatedOrderForm });
  };

  const formElementsArray = [];
  for (let key in data.orderForm) {
    formElementsArray.push({
      id: key,
      config: data.orderForm[key]
    });
  }
  let form = (
    <form onSubmit={orderHandler}>
      {formElementsArray.map((formElement) => (
        <Input
          key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          changed={(event) => inputChangedHandler(event, formElement.id)}
        />
      ))}
      <Button btnType="Success">ORDER</Button>
    </form>
  );

  return (
    <div>
      <h4>Enter your Contact Data</h4>
      {form}
    </div>
  );
};
export default Newjobs;
