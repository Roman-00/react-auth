import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyAsKEX7WB2_CGRKIDtp6wVYh_3D0mZNg0Y",
	authDomain: "auth-faa20.firebaseapp.com",
	projectId: "auth-faa20",
	storageBucket: "auth-faa20.appspot.com",
	messagingSenderId: "841427703278",
	appId: "1:841427703278:web:b14392f8cf947150352aff"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;