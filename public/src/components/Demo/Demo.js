import React, { Component } from 'react'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import { fromJS, toJS } from 'immutable'
import firebase from 'firebase'
import fetchApi from '../../utils/fetchComponentData'
import styles from './Demo.scss'
import 'babel-polyfill'

import {
	setPanorama
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
			panorama,
			loading
    } = this.state

		const {
			selectPanorama
		} = this.props

		const panoramaArr = panorama && _.map(_.sortBy(_.values(panorama.toJS()), o => { return o.data.index }), o => {
			const tmp = {
				id: o.Building,
				index: o.data.index,
				category: o.data.category,
				desktopUrl: o.data.desktopUrl,
				mobileUrl: o.data.mobileUrl,
				rotation: Object.values(o.data.panoramaRotation).toString().replace(/,/g, ' '),
				position: Object.values(o.data.position).toString().replace(/,/g, ' ')
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
								<a-sky id="image-360" rotation={panoramaArr[0].rotation} position={panoramaArr[0].position} src="#city"></a-sky>


							</a-scene>

						</div>
						<div className={styles.panoramas}>
							<ul style={{width: listWidth + 'px'}}>
							{
								panoramaArr.map((panorama, index) => (
									<li className={ styles.panorama_list } key={ index } onClick={selectPanorama( panorama.id )}>
										<img crossOrigin="anonymous" src={ panorama.mobileUrl } />
										<p>{panorama.category}</p>
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
