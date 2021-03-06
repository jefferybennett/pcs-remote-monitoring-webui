// Copyright (c) Microsoft. All rights reserved.

import React from 'react';
import { shallow } from 'enzyme';
import 'polyfills';

import { Schedule } from './schedule';

describe('Schedule Component', () => {
  it('Renders without crashing', () => {

    const fakeProps = {
      devices: {},
      entities: {},
      error: undefined,
      isPending: false,
      deviceGroups: [],
      lastUpdated: undefined,
      fetchDevices: () => {},
      changeDeviceGroup: (id) => {},
      t: () => {},
      updateCurrentWindow: () => {}
    };

    const wrapper = shallow(
      <Devices {...fakeProps} />
    );
  });
});
