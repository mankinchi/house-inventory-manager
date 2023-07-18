// organize-imports-ignore
import "./firebase/app";
import "./index.css";

import { ExistingTable } from "./components/existingTable";
import { AddForm } from "./components/addForm";

function App() {
	return (
		<div className="bg-green-300 w-screen h-screen overflow-auto">
			<h1 className="text-center text-3xl font-bold my-6">
				Household item tracker
			</h1>
			<div className="flex gap-1 justify-center">
				<div>
					<ExistingTable />
				</div>
				<div>
					<div className="border border-solid border-black bg-white rounded-r px-4 py-2">
						<AddForm />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
