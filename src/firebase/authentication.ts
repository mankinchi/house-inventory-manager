import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	signInWithRedirect,
} from "firebase/auth";
import { isMobileDevice } from "src/utils/device";
import { app } from "./app";

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const login = async () => {
	try {
		if (isMobileDevice()) {
			await signInWithRedirect(auth, provider);
		} else {
			await signInWithPopup(auth, provider);
		}
	} catch (e) {
		console.error(e);
	}
};

export const logout = async () => {
	try {
		await auth.signOut();
	} catch (e) {
		console.error(e);
	}
};

export const getCurrentUser = () => auth.currentUser;
