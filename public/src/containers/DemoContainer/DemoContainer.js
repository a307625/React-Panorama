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
    handleSelectPanorama: () => {
      const index = document.location.href.split('?index=')[1] - 1 || 0
      console.log('index', index);
      dispatch(setPanoramaIndex({value: index}))
    }
  })
)(Demo)
