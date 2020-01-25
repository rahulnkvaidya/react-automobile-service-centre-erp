import Autosuggest from "react-autosuggest";
import React, { useState, useEffect } from "react";
// Imagine you have a list of languages that you'd like to autosuggest.

let CityAutoSuggest = () => {
  const [value, valueChange] = useState('');
  const [suggestions, suggestionsChange] = useState([]);
  const languages = [
    {
      name: "C",
      year: 1972
    },
    {
      name: "Elm",
      year: 2012
    }
  ];

  // Teach Autosuggest how to calculate suggestions for any given input value.
  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : languages.filter(
          (lang) => lang.name.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  // When suggestion is clicked, Autosuggest needs to populate the input
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  const getSuggestionValue = (suggestion) => suggestion.name;

  // Use your imagination to render suggestions.
  const renderSuggestion = (suggestion) => <div>{suggestion.name}</div>;

  var onChange = (event, { newValue }) => {
    valueChange(newValue);
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
    placeholder: "Type a programming language",
    value,
    onChange: onChange
  };

  // Finally, render it!
  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
    />
  );
};
export default CityAutoSuggest;
