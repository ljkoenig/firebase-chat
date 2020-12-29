import './App.css'

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

firebase.initializeApp({
	apiKey: 'AIzaSyCZ4ExI_ITCNq9UyLDrd-5UGX4kpg6kMtc',
	authDomain: 'fir-demo-e648d.firebaseapp.com',
	projectId: 'fir-demo-e648d',
	storageBucket: 'fir-demo-e648d.appspot.com',
	messagingSenderId: '327415912039',
	appId: '1:327415912039:web:9d2fa96597262be643a6c2',
	measurementId: 'G-TGZDCF06KP',
})

const auth = firebase.auth()
const firestore = firebase.firestore()

function App() {
	const [user] = useAuthState(auth)

	return (
		<div className='App'>
			<header>
				<h1>Firebase Chat</h1>
				<SignOut />
			</header>
			<section>{user ? <ChatRoom /> : <SignIn />}</section>
		</div>
	)
}

function SignIn() {
	const signInWithGoogle = () => {
		const provider = new firebase.auth.GoogleAuthProvider()
		auth.signInWithPopup(provider)
	}

	return <button onClick={signInWithGoogle}>Sign in with Google</button>
}

function SignOut() {
	return (
		auth.currentUser && <button onClick={() => auth.signOut()}>Sign Out</button>
	)
}

function ChatRoom() {
	const messagesRef = firestore.collection('messages')
	// const query = messagesRef.orderBy('createdAt').limit(25)

	const [messages] = useCollectionData(messagesRef, { idField: 'id' })

	return (
		<>
			<header>Chat Room</header>
			<div>
				{messages &&
					messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
			</div>
		</>
	)
}

function ChatMessage(props) {
	const { text, uid } = props.message

	console.log(props.message)

	return <p>{text}</p>
}

export default App
