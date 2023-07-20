import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "./app";

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const login = async () => {
	try {
		const result = await signInWithPopup(auth, provider);

		return result.user;
	} catch (e) {
		console.error(e);
	}
};

export const getCurrentUser = () => auth.currentUser;
