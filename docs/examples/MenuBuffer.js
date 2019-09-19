import React from 'react';
import Select from '@whisperlab/react-select';

import { colourOptions } from '../data';

export default () => (
  <Select
    defaultValue={colourOptions[0]}
    options={colourOptions}
    styles={{ menu: base => ({ ...base, marginBottom: 76 }) }}
  />
);
