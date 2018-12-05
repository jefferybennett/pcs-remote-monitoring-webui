// Copyright (c) Microsoft. All rights reserved.

import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { ManageDeviceGroups } from './manageDeviceGroups';
import {
  redux as appRedux,
  epics as appEpics,
  getDeviceGroups,
  getActiveDeviceGroupId
} from 'store/reducers/appReducer';

const mapStateToProps = state => ({
  deviceGroups: getDeviceGroups(state),
  activeDeviceGroupId: getActiveDeviceGroupId(state)
});

const mapDispatchToProps = dispatch => ({
  closeFlyout: () => dispatch(appRedux.actions.setDeviceGroupFlyoutStatus(false)),
  deleteDeviceGroups: (ids) => dispatch(appRedux.actions.deleteDeviceGroups(ids)),
  insertDeviceGroups: (deviceGroups) => dispatch(appRedux.actions.insertDeviceGroups(deviceGroups)),
  logEvent: diagnosticsModel => dispatch(appEpics.actions.logEvent(diagnosticsModel))
});

export const ManageDeviceGroupsContainer = translate()(connect(mapStateToProps, mapDispatchToProps)(ManageDeviceGroups));
