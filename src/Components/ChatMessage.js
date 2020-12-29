import React from 'react'

import firebase from '../Firebase'
import 'firebase/auth'

const auth = firebase.auth()

const ChatMessage = (props) => {
	const { text, uid, photoURL } = props.message

	const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received'

	return (
		<div className={`message ${messageClass}`}>
			<img src={photoURL} alt='User' />
			<p>{text}</p>
		</div>
	)
}

export default ChatMessage
