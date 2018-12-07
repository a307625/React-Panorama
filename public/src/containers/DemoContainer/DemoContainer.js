import React, { Component } from 'react';
import { connect } from 'react-redux';
import Demo from '../../components/Demo';
import { fromJS, toJS } from 'immutable'

import {
  setPanorama
} from '../../actions';

export default connect(
  (state) => ({
     panorama: state.getIn(['demoReducers', 'panorama'])
  }),
  (dispatch) => ({
    selectPanorama: (panorama) => (id) => () => {
      console.log('id', id);
      console.log('panorama', panorama);
    }
  }),
  (stateProps, dispatchProps, ownProps) => {
    const { panorama } = stateProps
    const { selectPanorama } = dispatchProps
    return Object.assign({}, stateProps, dispatchProps, ownProps, {
      selectPanorama: selectPanorama(panorama)
    });
  }
)(Demo);
