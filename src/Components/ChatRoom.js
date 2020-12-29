import React, { useRef, useState } from 'react'
import ChatMessage from './ChatMessage'

import firebase from '../Firebase'
import 'firebase/firestore'
import 'firebase/auth'
import SignOut from '../Components/SignOut'

import { useCollectionData } from 'react-firebase-hooks/firestore'

const auth = firebase.auth()
const firestore = firebase.firestore()

const ChatRoom = () => {
	const dummy = useRef()
	const messagesRef = firestore.collection('messages')
	const query = messagesRef.orderBy('createdAt').limit(25)

	const [messages] = useCollectionData(query, { idField: 'id' })

	const [formValue, setFormValue] = useState('')

	const sendMessage = async (e) => {
		e.preventDefault()

		const { uid, photoURL } = auth.currentUser

		await messagesRef.add({
			text: formValue,
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
			uid,
			photoURL,
		})

		setFormValue('')

		dummy.current.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<>
			<main>
				<div>{messages && messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}</div>
				<div ref={dummy}></div>
			</main>
			<form onSubmit={sendMessage}>
				<input type='text' value={formValue} onChange={(e) => setFormValue(e.target.value)} />
				<button type='submit'>Send</button>
			</form>
		</>
	)
}

export default ChatRoom
