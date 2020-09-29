import React from "react";

import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

function SignIn() {
	const signInWithGoogle = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		auth.signInWithPopup(provider);
	}

	return (
		<button onClick={signInWithGoogle}>
			Sign in with Google
		</button>
	)
}

function SignOut() {
	return auth.currentUser && (
		<button onClick={() => auth.signOut()}>
			Sign Out
		</button>
	)
}

function ChatRoom() {

}

export default App;