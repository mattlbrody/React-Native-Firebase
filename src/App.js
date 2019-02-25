import React, {Component} from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './Components/Common';
import LoginForm from './Components/LoginForm'

class App extends Component {
	state = {loggedIn:null};

	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyDwxWZGf81SlnoOCHd6uoW5cOI66kCpbFA',
			authDomain: 'authentication-2b5e1.firebaseapp.com',
			databaseURL: 'https://authentication-2b5e1.firebaseio.com',
			projectId: 'authentication-2b5e1',
			storageBucket: 'authentication-2b5e1.appspot.com',
			messagingSenderId: '27852308270'
		});

		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({loggedIn:true});
			} else {
				this.setState({loggedIn:false});
			}
		});
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
					<Card>
						<CardSection>
							<Button onPress={() => firebase.auth().signOut()}>
								Log out
							</Button>
						</CardSection>
					</Card>
				);
			case false: 
				return <LoginForm />;
			default:
				return <Spinner size='large' />;
		}
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}

export default App;