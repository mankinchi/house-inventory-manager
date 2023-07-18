import { useState } from "react";
import { Minus, Plus, Trash2 } from "react-feather";
import { Button } from "src/components/button";
import { ButtonType } from "src/components/button/buttonTypes";
import { removeItem, updateItemQuantity } from "src/firebase/database";
import { Item } from "src/types/item";
import { QuickUpdateBtn } from "./quickUpdateBtn";

interface Props {
	item: Item;
}

export const ItemRow = ({ item }: Props) => {
	const [value, setValue] = useState(1);

	const handleAddBtnClick = () => {
		updateItemQuantity(item, value);
	};

	const handleReduceBtnClick = () => {
		updateItemQuantity(item, value * -1);
	};

	const handleQuickUpdateBtnClick = (amount: number) => {
		updateItemQuantity(item, amount);
	};

	const handleRemoveBtnClick = () => {
		if (confirm(`Do you want to remove ${item.name}?`)) {
			removeItem(item);
		}
	};

	return (
		<tr className="border border-solid border-black">
			<td className="p-2">{item.name}</td>
			<td className="p-2">
				{item.amount} {item.unit}
			</td>
			<td className="px-4 py-2">
				<div className="flex gap-1">
					<input
						type="number"
						className="w-10 text-right px-2 py-1 border border-solid border-black rounded focus:outline-none"
						value={value}
						onChange={(e) =>
							setValue(e.currentTarget.valueAsNumber)
						}
					/>
					<Button
						text={<Plus size={18} />}
						smallPadding
						onClick={handleAddBtnClick}
					/>
					<Button
						text={<Minus size={18} />}
						smallPadding
						type={ButtonType.ERROR}
						onClick={handleReduceBtnClick}
					/>
				</div>
			</td>
			<td className="px-4 py-2 flex gap-1 justify-center">
				<QuickUpdateBtn
					amount={1}
					onClick={handleQuickUpdateBtnClick}
				/>
				<QuickUpdateBtn
					amount={-1}
					onClick={handleQuickUpdateBtnClick}
				/>
			</td>
			<td className="px-2">
				<Button
					text={<Trash2 size={18} />}
					smallPadding
					type={ButtonType.ERROR}
					onClick={handleRemoveBtnClick}
				/>
			</td>
		</tr>
	);
};
