// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { FirebaseOptions, initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig: FirebaseOptions = {
	apiKey: "AIzaSyBwcsR1Vuq1sDH8urLMIAKrpAhhYC3FF5w",
	authDomain: "house-inventory-manager.firebaseapp.com",
	projectId: "house-inventory-manager",
	storageBucket: "house-inventory-manager.appspot.com",
	messagingSenderId: "788672896360",
	appId: "1:788672896360:web:6918524970625960c70add",
	measurementId: "G-0YZ7KB4PM7",
	databaseURL:
		"https://house-inventory-manager-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
