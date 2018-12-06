// Copyright (c) Microsoft. All rights reserved.

import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { DeviceJobProperties } from './deviceJobProperties';
import {
  epics as appEpics,
} from 'store/reducers/appReducer';

// Wrap the dispatch method
const mapDispatchToProps = dispatch => ({
  logEvent: diagnosticsModel => dispatch(appEpics.actions.logEvent(diagnosticsModel))
});

export const DeviceJobPropertiesContainer = translate()(connect(null, mapDispatchToProps)(DeviceJobProperties));
