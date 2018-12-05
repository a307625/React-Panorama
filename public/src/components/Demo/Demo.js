import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { fromJS, toJS } from 'immutable'
import styles from './Demo.scss';

import {
} from '../../actions';

class AddCoursePage extends Component {
	constructor(props) {
    super(props);
    this.state = {
		};
  }

	componentDidMount() {
	}

  componentWillReceiveProps(nextProps) {
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true
  }

	render() {
		const {
    } = this.state;

		const {
		} = this.props;

		return (
			<div>
				<h1>安安</h1>
			</div>
		);
	}
}


export default AddCoursePage;
