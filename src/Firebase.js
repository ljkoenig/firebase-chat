import firebase from 'firebase/app'

let config = {
	apiKey: 'AIzaSyCZ4ExI_ITCNq9UyLDrd-5UGX4kpg6kMtc',
	authDomain: 'fir-demo-e648d.firebaseapp.com',
	projectId: 'fir-demo-e648d',
	storageBucket: 'fir-demo-e648d.appspot.com',
	messagingSenderId: '327415912039',
	appId: '1:327415912039:web:9d2fa96597262be643a6c2',
	measurementId: 'G-TGZDCF06KP',
}

firebase.initializeApp(config)

export default firebase
