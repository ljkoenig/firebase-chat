import React from 'react'
import './App.css'

import ChatRoom from './Components/ChatRoom'
import SignIn from './Components/SignIn'

import firebase from './Firebase'
import 'firebase/auth'
import SignOut from './Components/SignOut'

import { useAuthState } from 'react-firebase-hooks/auth'

const auth = firebase.auth()

function App() {
	const [user] = useAuthState(auth)

	return (
		<div className='App'>
			<header>
				<h1>Firebase ⚛️🔥💬</h1>
				{user ? <SignOut /> : <SignIn />}
			</header>
			<section>{user && <ChatRoom />}</section>
		</div>
	)
}

export default App
