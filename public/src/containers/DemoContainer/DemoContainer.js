import { connect } from 'react-redux'
import Demo from '../../components/Demo'

import {
  setPanoramaIndex
} from '../../actions'

export default connect(
  (state) => ({
     panoramaIndex: state.getIn(['demo', 'panoramaIndex'])
  }),
  (dispatch) => ({
    handleSelectPanorama: (index) => () => {
      dispatch(setPanoramaIndex({value: index}))
    }
  })
)(Demo)
