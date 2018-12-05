// Copyright (c) Microsoft. All rights reserved.

import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { epics as appEpics } from 'store/reducers/appReducer';
import { TimeIntervalDropdown } from './timeIntervalDropdown'


const mapDispatchToProps = dispatch => ({
  logEvent: diagnosticsModel => dispatch(appEpics.actions.logEvent(diagnosticsModel))
});

export const TimeIntervalDropdownContainer = translate()(connect(null, mapDispatchToProps)(TimeIntervalDropdown));
