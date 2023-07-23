import { useState } from "react";
import { Minus, Plus, ShoppingCart, Trash2 } from "react-feather";
import { Button } from "src/components/button";
import { ButtonType } from "src/components/button/buttonTypes";
import {
	addItemToShoppingCart,
	removeItem,
	updateItemQuantity,
} from "src/firebase/items";
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

	const handleAddToShoppingCartClick = () => {
		addItemToShoppingCart(item);
	};

	return (
		<tr className="border border-solid border-black">
			<td className="whitespace-nowrap p-2">{item.name}</td>
			<td className="whitespace-nowrap p-2">
				{item.amount} {item.unit}
			</td>
			<td className="px-4 py-2">
				<div className="flex items-center gap-1">
					<input
						type="number"
						className="w-10 rounded border border-solid border-black px-2 py-1 text-right focus:outline-none"
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
			<td>
				<div className="flex justify-center gap-1 px-4 py-2 ">
					<QuickUpdateBtn
						amount={1}
						onClick={handleQuickUpdateBtnClick}
					/>
					<QuickUpdateBtn
						amount={-1}
						onClick={handleQuickUpdateBtnClick}
					/>
				</div>
			</td>
			<td className="px-2">
				<div className="flex gap-2">
					<Button
						text={<ShoppingCart size={18} />}
						smallPadding
						disabled={item.inShoppingCart}
						onClick={handleAddToShoppingCartClick}
					/>
					<Button
						text={<Trash2 size={18} />}
						smallPadding
						type={ButtonType.ERROR}
						onClick={handleRemoveBtnClick}
					/>
				</div>
			</td>
		</tr>
	);
};
