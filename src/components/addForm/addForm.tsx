import { useState } from "react";
import { addItem } from "../../firebase/database";
import { Button } from "../button";

export const AddForm = () => {
	const [item, setItem] = useState("");
	const [amount, setAmount] = useState(0);
	const [unit, setUnit] = useState("");

	const handleBtnSubmit = () => {
		addItem({
			name: item,
			amount,
			unit,
		}).catch((e) => {
			console.log(e);
		});
	};

	return (
		<div className="flex flex-col gap-2">
			<div className="text-lg font-bold">Add new item</div>
			<input
				type="text"
				value={item}
				placeholder="Name"
				className="border border-solid border-black focus:outline-none px-2 py-1 rounded"
				onChange={(e) => setItem(e.currentTarget.value)}
			/>
			<input
				type="number"
				value={amount}
				placeholder="Amount"
				className="border border-solid border-black focus:outline-none px-2 py-1 rounded"
				onChange={(e) => setAmount(e.currentTarget.valueAsNumber)}
			/>
			<input
				type="text"
				value={unit}
				placeholder="Unit"
				className="border border-solid border-black focus:outline-none px-2 py-1 rounded"
				onChange={(e) => setUnit(e.currentTarget.value)}
			/>

			<Button
				text="Add"
				onClick={handleBtnSubmit}
			/>
		</div>
	);
};
