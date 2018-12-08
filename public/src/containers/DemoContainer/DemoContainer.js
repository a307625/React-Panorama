import React, { Component } from 'react';
import { connect } from 'react-redux';
import Demo from '../../components/Demo';
import { fromJS, toJS } from 'immutable'

import {
  setPanoramaIndex
} from '../../actions';

export default connect(
  (state) => ({
     panoramaIndex: state.getIn(['demo', 'panoramaIndex'])
  }),
  (dispatch) => ({
    handleSelectPanorama: (index) => () => {
      console.log('index', index);
      dispatch(setPanoramaIndex({value: index}))
    }
  })
)(Demo);
