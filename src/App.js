import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './Components/Common';
import LoginForm from './Components/LoginForm'

class App extends Component {
	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyDwxWZGf81SlnoOCHd6uoW5cOI66kCpbFA',
			authDomain: 'authentication-2b5e1.firebaseapp.com',
			databaseURL: 'https://authentication-2b5e1.firebaseio.com',
			projectId: 'authentication-2b5e1',
			storageBucket: 'authentication-2b5e1.appspot.com',
			messagingSenderId: '27852308270'
		})
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				<LoginForm />
			</View>
		);
	}
}

export default App;