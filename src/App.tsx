// organize-imports-ignore
import "./firebase/app";
import "./index.css";
import "react-responsive-modal/styles.css";

import { ExistingTable } from "./components/existingTable";
import { AddForm } from "./components/addForm";
import { ShoppingCart } from "./components/shoppingCart";
import { auth, login, logout } from "./firebase/authentication";
import { useEffect, useMemo, useState } from "react";
import { AppContext } from "./appContext";
import { User, onAuthStateChanged } from "firebase/auth";
import { Button } from "./components/button";
import { LogOut } from "react-feather";
import { ButtonType } from "./components/button/buttonTypes";

function App() {
	const [user, setUser] = useState<User>();

	const appContextValue = useMemo(
		() => ({
			user,
		}),
		[user],
	);

	const handleLoginBtnClick = async () => {
		try {
			const user = await login();

			setUser(user);
		} catch (e) {
			console.error(e);
		}
	};

	const handleLogoutBtnClick = async () => {
		try {
			await logout();
			setUser(undefined);
		} catch (e) {
			console.error(e);
		}
	};

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			}
		});
	}, []);

	return (
		<AppContext.Provider value={appContextValue}>
			<div className="h-screen w-screen overflow-auto bg-green-300">
				<h1 className="my-6 text-center text-3xl font-bold">
					Household item tracker
				</h1>

				<div className="flex flex-col gap-1">
					<div className="flex justify-center">
						{!user ? (
							<div
								className="cursor-pointer border border-solid border-black bg-white p-2"
								// eslint-disable-next-line
								onClick={handleLoginBtnClick}
							>
								Log In
							</div>
						) : (
							<div className="flex items-center gap-2">
								<img
									className="aspect-square w-10 rounded-full border border-solid border-white"
									src={
										user.photoURL ??
										"https://placehold.co/200"
									}
									alt="image"
									referrerPolicy="no-referrer"
								/>
								<div className="text-lg font-bold">
									{user.displayName}
								</div>
								<Button
									text={<LogOut />}
									type={ButtonType.INVERSE}
									smallPadding
									// eslint-disable-next-line
									onClick={handleLogoutBtnClick}
								/>
							</div>
						)}
					</div>
					<div className="flex justify-center gap-1">
						<div className="border border-solid border-black bg-white p-2">
							<ExistingTable />
						</div>
						<div className="flex flex-col gap-2">
							<div className="rounded-r border border-solid border-black bg-white px-4 py-2">
								<AddForm />
							</div>
							<div className="rounded-r border border-solid border-black bg-white px-4 py-2">
								<ShoppingCart />
							</div>
						</div>
					</div>
				</div>
			</div>
		</AppContext.Provider>
	);
}

export default App;
