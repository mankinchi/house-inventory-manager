// organize-imports-ignore
import "./firebase/app";
import "./index.css";
import "react-responsive-modal/styles.css";

import { ExistingTable } from "./components/existingTable";
import { AddForm } from "./components/addForm";
import { ShoppingCart } from "./components/shoppingCart";

function App() {
	return (
		<div className="h-screen w-screen overflow-auto bg-green-300">
			<h1 className="my-6 text-center text-3xl font-bold">
				Household item tracker
			</h1>
			<div className="flex justify-center gap-1">
				<div>
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
	);
}

export default App;
