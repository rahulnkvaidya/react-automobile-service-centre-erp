import Autosuggest from "react-autosuggest";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import * as CompanySearchListAction from "../../store/actions/companySearchAction";
import * as RatnaAction from "../../store/actions/ratnaAction";
import Theam from "./Theam.css";
import _ from "lodash";

// Imagine you have a list of languages that you'd like to autosuggest.

let CityAutoSuggest = ({  input, label, type, meta: { touched, error } }) => {
  const dispatch = useDispatch();
  const invalue = input.value;
  const [value, valueChange] = useState('');
  useEffect(() => {
    valueChange(invalue);
  }, [input.value]);
  //
  const [suggestions, suggestionsChange] = useState([]);
  const [companyList, updateList] = useState([]);
  const [ratnalist, updateRatna] = useState([]);
  const [ratnasugg, Updateratnasugg] = useState("");

  var fav = useSelector((state) => state.companySearch);
  var ratna = useSelector((state) => state.ratna);

  useEffect(() => {
    
    updateList(fav);
  }, [fav]);
  useEffect(() => {
    updateRatna(ratna);
  }, [ratna]);
  useEffect(() => {
//    console.log(ratnalist);
    const ratnafir = ratnalist[0]
    const rat = _.valuesIn(ratnafir, suggestions);
    Updateratnasugg(rat[2]);
  }, [ratnalist]);

  var onSelectSugg = (
    event,
    { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }
  ) => {
  //  console.log(suggestion.companyname)
    dispatch(RatnaAction.RatnaSearch(suggestion.companyname));
  };
  //console.log(companyList);
  const languages = companyList;

  // Teach Autosuggest how to calculate suggestions for any given input value.
  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : languages.filter(
          (lang) =>
            lang.companyname.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  // When suggestion is clicked, Autosuggest needs to populate the input
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  const getSuggestionValue = (suggestion) => suggestion.companyname;

  // Use your imagination to render suggestions.
  const renderSuggestion = (suggestion) => <div>{suggestion.companyname}</div>;

  var onChange = (event, { newValue }) => {
    dispatch(CompanySearchListAction.fetchJoblist(newValue));

  //  console.log("new value =" + newValue);
    valueChange(newValue);
    input.onChange(newValue);
  };
  
  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  var onSuggestionsFetchRequested = ({ value }) => {
    suggestionsChange(getSuggestions(value));
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  var onSuggestionsClearRequested = () => {
    suggestionsChange([]);
  };

  //  const { value, suggestions } = this.state;

  // Autosuggest will pass through all these props to the input.
  const inputProps = {
    placeholder: "Company Name",
    value,
    onChange: onChange
  };

  // Finally, render it!
  return (
    <div col-12>
    <div style={{ color: "red", padding: "10px"}}>{ratnasugg}</div>
      <Autosuggest
        // theme={Theam}
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        onSuggestionSelected={onSelectSugg}
      />
      
    </div>
  );
};

export default CityAutoSuggest;
