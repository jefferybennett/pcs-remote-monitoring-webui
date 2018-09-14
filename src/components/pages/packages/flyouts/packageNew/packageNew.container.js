// Copyright (c) Microsoft. All rights reserved.

import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { PackageNew } from './packageNew';
import {
  getCreatePackageError,
  getCreatePackagePendingStatus,
  epics as packagesEpics,
  redux as packagesRedux
} from 'store/reducers/packagesReducer';

// Pass the global info needed
const mapStateToProps = state => ({
  isPending: getCreatePackagePendingStatus(state),
  error: getCreatePackageError(state)
});

// Wrap the dispatch methods
const mapDispatchToProps = dispatch => ({
  createPackage: packageModel => dispatch(packagesEpics.actions.createPackage(packageModel)),
  resetPackagesPendingError: () => dispatch(packagesRedux.actions.resetPendingAndError(packagesEpics.actions.createPackage)),
});

export const PackageNewContainer = translate()(connect(mapStateToProps, mapDispatchToProps)(PackageNew));
