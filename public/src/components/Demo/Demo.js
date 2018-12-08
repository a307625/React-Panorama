import React, { Component } from 'react'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import { fromJS, toJS } from 'immutable'
import firebase from 'firebase'
import fetchApi from '../../utils/fetchComponentData'
import styles from './Demo.scss'
import 'babel-polyfill'

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
			panoramaIndex,
			handleSelectPanorama
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
						<div>
							<a-scene>
								<a-assets>
								{
									panoramaArr.map((panorama, index) => (
										<img id={index.toString()} key={ index } crossOrigin="anonymous" src={ panorama.desktopUrl } />
									))
								}
								</a-assets>
								<a-sky material="opacity: 0" id="image-360" rotation={panoramaArr[panoramaIndex].rotation} position={panoramaArr[panoramaIndex].position} src={ "#" + panoramaIndex }>
									<a-animation attribute="material.opacity" dur="5000" repeat="0" to="1"></a-animation>
								</a-sky>
							</a-scene>

						</div>
						<div className={styles.panoramas}>
							<ul style={{width: listWidth + 'px'}}>
							{
								panoramaArr.map((panorama, index) => (
									<li className={ styles.panorama_list } key={ index } onClick={handleSelectPanorama(index)}>
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
