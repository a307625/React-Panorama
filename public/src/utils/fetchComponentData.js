import firebase from 'firebase'
import Config from '../config'

const { databaseURL, serviceAccount } = Config

const getPanorama = () => {
    const VRCamFirebase = firebase.initializeApp({
      databaseURL,
      serviceAccount
    })

    const fetchPanoramas = VRCamFirebase.database().ref('/panoramas').orderByChild('Building').equalTo('c951a5af-603f-4003-9d1c-707657febe95')
    const response = fetchPanoramas.once('value').then(snapshot => {
      return snapshot.val()
    })
    return response
}


export default {
  getPanorama: () => {
    const promises = [getPanorama()]
    return Promise.all(promises)
  }
}
