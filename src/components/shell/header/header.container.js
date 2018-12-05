// Copyright (c) Microsoft. All rights reserved.

import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import { epics } from 'store/reducers/appReducer';
import { Header } from './header';

const mapDispatchToProps = dispatch => ({
  logEvent: diagnosticsModel => dispatch(epics.actions.logEvent(diagnosticsModel))
});

export const HeaderContainer = translate()(connect(null, mapDispatchToProps)(Header));
