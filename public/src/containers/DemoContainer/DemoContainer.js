import React, { Component } from 'react';
import { connect } from 'react-redux';
import Demo from '../../components/Demo';
import { fromJS, toJS } from 'immutable'

import {
} from '../../actions';

export default connect(
  (state) => ({
  }),
  (dispatch) => ({
  }),
  (stateProps, dispatchProps, ownProps) => {
    return Object.assign({}, stateProps, dispatchProps, ownProps, {
    });
  }
)(Demo);
