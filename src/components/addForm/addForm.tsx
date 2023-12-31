import { useContext, useState } from "react";
import { AppContext } from "src/appContext";
import { addItem } from "src/firebase/items";
import { Button } from "../button";

export const AddForm = () => {
	const { user } = useContext(AppContext);

	const [item, setItem] = useState("");
	const [amount, setAmount] = useState(0);
	const [unit, setUnit] = useState("");

	const handleBtnSubmit = () => {
		addItem({
			name: item,
			amount,
			unit,
		})
			.catch((e) => {
				console.log(e);
			})
			.finally(() => {
				setItem("");
				setAmount(0);
				setUnit("");
			});
	};

	return (
		<div className="flex flex-col gap-2">
			<div className="text-lg font-bold">Add new item</div>
			<input
				type="text"
				value={item}
				placeholder="Name"
				className="rounded border border-solid border-black px-2 py-1 focus:outline-none"
				onChange={(e) => setItem(e.currentTarget.value)}
			/>
			<input
				type="number"
				value={amount}
				placeholder="Amount"
				className="rounded border border-solid border-black px-2 py-1 focus:outline-none"
				onChange={(e) => setAmount(e.currentTarget.valueAsNumber)}
			/>
			<input
				type="text"
				value={unit}
				placeholder="Unit"
				className="rounded border border-solid border-black px-2 py-1 focus:outline-none"
				onChange={(e) => setUnit(e.currentTarget.value)}
			/>

			<Button
				text="Add"
				disabled={!user}
				onClick={handleBtnSubmit}
			/>
		</div>
	);
};
