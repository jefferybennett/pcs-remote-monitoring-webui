// Copyright (c) Microsoft. All rights reserved.

import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { Summary } from './summary';
import {
  epics as appEpics,
} from 'store/reducers/appReducer';

// Wrap the dispatch method
const mapDispatchToProps = dispatch => ({
  logEvent: diagnosticsModel => dispatch(appEpics.actions.logEvent(diagnosticsModel))
});

export const SummaryContainer = translate()(connect(null, mapDispatchToProps)(Summary));
