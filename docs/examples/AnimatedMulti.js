// @flow

import React from 'react';

import Select from '@whisperlab/react-select';
import makeAnimated from '@whisperlab/react-select/animated';
import { colourOptions } from '../data';

const animatedComponents = makeAnimated();

export default function AnimatedMulti() {
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[colourOptions[4], colourOptions[5]]}
      isMulti
      options={colourOptions}
    />
  );
}
