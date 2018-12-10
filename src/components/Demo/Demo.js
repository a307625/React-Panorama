import React, { Component } from 'react'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import { fromJS, toJS } from 'immutable'
import firebase from 'firebase'
import fetchApi from '../../utils/fetchComponentData'
import styles from './Demo.scss'
import 'babel-polyfill'
import Scene from './Scene'

class Demo extends Component {
	constructor(props) {
    super(props)
    this.state = {
			loading: true,
			panorama: null,
			path: document.location.pathname
		}
  }

	componentDidMount() {
		this.getFetchData()
	}

	getFetchData() {
		(async () => {
			const panorama = await fetchApi.getPanorama(document.location.pathname)
			this.setState({
				panorama: fromJS(panorama[0]),
				loading: false
			})
		})()
	}

	render() {
		const {
			loading,
			panorama,
			path
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
						{
							panoramaArr.map((panorama, index) => (
								(index === panoramaIndex) && <Scene panorama={ panorama } key = { index } />
							))
						}
						<div className={styles.panoramas}>
							<ul style={{width: listWidth + 'px'}}>
							{
								panoramaArr.map((panorama, index) => (
									<Link to={ path + '?index=' + (index + 1) } key={ index } onClick={ handleSelectPanorama() }>
										<li className={ (index === panoramaIndex) && styles.panorama_list_on || styles.panorama_list_off }>
											<img crossOrigin="anonymous" src={ panorama.mobileUrl } />
											<p>{panorama.category}</p>
										</li>
									</Link>
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
