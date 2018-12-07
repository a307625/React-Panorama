import React, { Component } from 'react'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import { fromJS, toJS } from 'immutable'
import firebase from 'firebase'
import fetchApi from '../../utils/fetchComponentData'
import styles from './Demo.scss'
import 'babel-polyfill'

import {
} from '../../actions'

class Demo extends Component {
	constructor(props) {
    super(props)
    this.state = {
			loading: true,
			panorama: null
		}
  }

	componentDidMount() {
		this.getFetchData()
	}

	getFetchData() {
		(async () => {
			const panorama = await fetchApi.getPanorama()
			this.setState({
				panorama: fromJS(panorama[0]),
				loading: false
			})
		})()
	}

	render() {
		const {
			loading,
			panorama
    } = this.state

		const {
		} = this.props
console.log('panorama', panorama);
		const panoramaArr = panorama && _.map(_.sortBy(_.values(panorama.toJS()), o => { return o.data.index }), o => {
			const tmp = {
				id: o.Building,
				index: o.data.index,
				desktopUrl: o.data.desktopUrl,
				mobileUrl: o.data.mobileUrl
			}
			return tmp
		})

		const listWidth = panorama && 180 * panoramaArr.length || 0

		return (
			<div>
			{
				(!loading) && (
					<div>
						<div className={styles.scene}>
							<a-scene>
								<a-assets>
									<img id="city" crossOrigin="anonymous" src={ panoramaArr[0].desktopUrl } />
								</a-assets>
								<a-sky id="image-360" src="#city"></a-sky>


							</a-scene>

						</div>
						<div className={styles.panoramas}>
							<ul style={{width: listWidth + 'px'}}>
							{
								panoramaArr.map((panorama, index) => (
									<li className={ styles.panorama_list } key={ index }>
										<img crossOrigin="anonymous" src={ panorama.mobileUrl } />
										<p></p>
									</li>
								))
							}
							</ul>
						</div>
					</div>
				)
			}
			</div>
		)
		}
	}


export default Demo
