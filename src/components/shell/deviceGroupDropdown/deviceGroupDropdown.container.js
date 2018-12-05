// Copyright (c) Microsoft. All rights reserved.

import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { redux as appRedux, getDeviceGroups, getActiveDeviceGroupId, epics as appEpics } from 'store/reducers/appReducer';

import { DeviceGroupDropdown } from './deviceGroupDropdown';

const mapStateToProps = state => ({
  deviceGroups: getDeviceGroups(state),
  activeDeviceGroupId: getActiveDeviceGroupId(state)
});

// Wrap the dispatch method
const mapDispatchToProps = dispatch => ({
  changeDeviceGroup: (id) => dispatch(appRedux.actions.updateActiveDeviceGroup(id)),
  logEvent: diagnosticsModel => dispatch(appEpics.actions.logEvent(diagnosticsModel))
});

export const DeviceGroupDropdownContainer = translate()(connect(mapStateToProps, mapDispatchToProps)(DeviceGroupDropdown));
