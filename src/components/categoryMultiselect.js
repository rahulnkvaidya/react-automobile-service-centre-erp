import React from "react";
import category from '../data/category';
import { Multiselect } from 'multiselect-react-dropdown';
import _ from 'lodash'

export default function categoryMultiselect({ input }) {
    const values = input.value;
    let selectedvalue = [];
    Object.keys(values).map((key, index) => {
        selectedvalue.push({ name: values[key].category, id: values[key].cat_url });
        return null;
    });
    const onSelect = (optionsList, selectedItem) => {
      console.log(selectedvalue);
      optionsList = [...selectedvalue, optionsList]
        input.onChange([ ...values, { category: selectedItem.name, cat_url: selectedItem.cat } ]);
    };
    const onRemove= (optionList, removedItem)=>  {
        var evens = _.reject(values,{category: removedItem.name})
        input.onChange(evens);
    };
  return (
    <Multiselect
      options={category} // Options to display in the dropdown
      displayValue="name" // Property name to display in the dropdown options
      selectedValues={selectedvalue} // Preselected value to persist in dropdown
      onSelect={onSelect} // Function will trigger on select event
      onRemove={onRemove} // Function will trigger on remove event
      
    />
  );
}
