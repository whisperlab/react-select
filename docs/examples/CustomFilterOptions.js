import React, { Component } from 'react';
import Select from '@whisperlab/react-select';
import { colourOptions } from '../data';

type State = {
  ignoreCase: boolean,
  ignoreAccents: boolean,
  trim: boolean,
  matchFrom: boolean,
};
const filterOptions = (candidate, input) => {
  if (input) {
    return candidate.value === customOptions[0].value;
  }
  return true;
};

const customOptions = [
  {
    value: 'custom',
    label: 'Using a custom filter to always display this option on search',
  },
  ...colourOptions,
];

export default class SelectCreateFilter extends Component<*, State> {
  render() {
    return (
      <Select
        defaultValue={customOptions[0]}
        isClearable
        isSearchable
        name="color"
        options={customOptions}
        filterOption={filterOptions}
      />
    );
  }
}
