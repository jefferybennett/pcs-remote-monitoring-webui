// Copyright (c) Microsoft. All rights reserved.

import React, { Component } from 'react';

import { Select } from 'components/shared';
import { toDiagnosticsModel } from 'services/models';

import './deviceGroupDropdown.css';

export class DeviceGroupDropdown extends Component {

  onChange = (deviceGroupIds) => ({ target: { value: { value } = {} } = {} }) => {
    // Don't try to update the device group if the device id doesn't exist
    if (deviceGroupIds.indexOf(value) > -1) {
      this.props.changeDeviceGroup(value);
    }

    console.log("saki:deviceGroupDown:onChange:DeviceFilter_Select");
    this.props.logEvent(toDiagnosticsModel('DeviceFilter_Select', {}));
  }

  deviceGroupsToOptions = deviceGroups => deviceGroups
    .map(({ id, displayName }) => ({ label: displayName, value: id }));

  render() {
    const { deviceGroups, activeDeviceGroupId } = this.props;
    const deviceGroupIds = deviceGroups.map(({ id }) => id);
    return (
      <Select
        className="device-group-dropdown"
        options={this.deviceGroupsToOptions(deviceGroups)}
        value={activeDeviceGroupId}
        clearable={false}
        onChange={this.onChange(deviceGroupIds)} />
    );
  }
}
