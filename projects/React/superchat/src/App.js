import React from 'react';
import './App.css';

import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from "react-firebase-hooks/auth";

import { SignIn, ChatRoom} from "Components/SignIn";

firebase.initializeApp({
	apiKey: "AIzaSyCghBMxC_aaXIb_A_X_DarjHpCi5J1IOf0",
	authDomain: "superchat-44c57.firebaseapp.com",
	databaseURL: "https://superchat-44c57.firebaseio.com",
	projectId: "superchat-44c57",
	storageBucket: "superchat-44c57.appspot.com",
	messagingSenderId: "519709686913",
	appId: "1:519709686913:web:f3df3297e584306338a180"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {

	const [user] = useAuthState(auth);

	return (
		<div className="App">
			<header className="App-header">

			</header>

			<section>
				{ user ? <ChatRoom /> : <SignIn /> }
			</section>
		</div>
	);
}

export default App;
