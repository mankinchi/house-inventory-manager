import { User } from "firebase/auth";
import { createContext } from "react";

interface AppContext {
	user?: User;
}

export const AppContext = createContext<AppContext>({
	user: undefined,
});
