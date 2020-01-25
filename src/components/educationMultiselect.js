import React from "react";
import education from '../data/education';
import { Multiselect } from 'multiselect-react-dropdown';
import _ from 'lodash'

export default function educationMultiselect({ input }) {
    const values = input.value;
    let selectedvalue = [];
    Object.entries(values).map((value, key) => {
        selectedvalue.push({ name: values[key].category, cat: values[key].cat_url }) 
    });
    const onSelect = (optionsList, selectedItem) => {
        optionsList = [...selectedvalue, optionsList]
        input.onChange([ ...values, { category: selectedItem.name, cat_url: selectedItem.id } ]);
    };
    const onRemove = (optionList, removedItem) => {
        var evens = _.reject(values,{category: removedItem.name})
        input.onChange(evens);
    };
  return (
    <Multiselect
      options={education} // Options to display in the dropdown
      selectedvalues={selectedvalue} // Preselected value to persist in dropdown
      onSelect={onSelect} // Function will trigger on select event
      onRemove={onRemove} // Function will trigger on remove event
      displayValue="name" // Property name to display in the dropdown options
    />
  );
}
