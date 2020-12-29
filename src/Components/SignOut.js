import React from 'react'

import firebase from '../Firebase'
import 'firebase/auth'

const auth = firebase.auth()

const SignOut = () => {
	return (
		auth.currentUser && (
			<button className='sign-out' onClick={() => auth.signOut()}>
				Sign Out
			</button>
		)
	)
}

export default SignOut
