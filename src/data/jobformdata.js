const jobformdata = {
  orderForm: {
    jobid: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Jobid"
      },
      value: fav.jobid
    },
    category: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Street"
      },
      value: fav.category
    },
    edu: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "ZIP Code"
      },
      value: fav.edu
    },
    post: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "Country"
      },
      value: fav.post
    },
    companyname: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "companyname"
      },
      value: fav.companyname
    },
    lastdate: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "lastdate"
      },
      value: fav.lastdate
    },
    advertisementno: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "advertisementno"
      },
      value: fav.advertisementno
    },
    fulldescription: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "fulldescription"
      },
      value: fav.fulldescription
    },
    salary: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "salary"
      },
      value: fav.salary
    },
    header: {
      elementType: "textarea",
      elementConfig: {
        type: "text",
        placeholder: "header"
      },
      value: fav.header
    },
    howToApply: {
      elementType: "textarea",
      elementConfig: {
        type: "text",
        placeholder: "howToApply"
      },
      value: fav.howToApply
    },
    official_url: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "official_url"
      },
      value: fav.howToApply
    },
    address: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "address"
      },
      value: fav.address
    },
    pin: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "pin"
      },
      value: fav.pin
    },
    city: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "city"
      },
      value: fav.city
    },
    state: {
      elementType: "input",
      elementConfig: {
        type: "text",
        placeholder: "state"
      },
      value: fav.state
    },

    employmentnotice: {
      elementType: "select",
      elementConfig: {
        options: [
          { value: "fastest", displayValue: "Fastest" },
          { value: "cheapest", displayValue: "Cheapest" }
        ]
      },
      value: ""
    }
  },
  loading: false
};
export default jobformdata;
