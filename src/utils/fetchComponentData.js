import firebase from 'firebase'
import Config from '../config'

const { databaseURL, serviceAccount } = Config

const VRCamFirebase = firebase.initializeApp({
  databaseURL,
  serviceAccount
})

const getPanorama = (url) => {
    const id = url.split('/')[1]


    const fetchPanoramas = VRCamFirebase.database().ref('/panoramas').orderByChild('Building').equalTo(id)
    const response = fetchPanoramas.once('value').then(snapshot => {
      return snapshot.val()
    })
    return response
}


export default {
  getPanorama: (url) => {
    const promises = [getPanorama(url)]
    return Promise.all(promises)
  }
}
