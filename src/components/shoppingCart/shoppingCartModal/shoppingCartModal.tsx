import { useState } from "react";
import { Check, X } from "react-feather";
import Modal from "react-responsive-modal";
import { Button } from "src/components/button";
import {
	removeItemToShoppingCart,
	updateItemQuantity,
} from "src/firebase/items";
import { Item } from "src/types/item";

interface Props {
	item?: Item;
	isOpen: boolean;
	onClose: () => void;
}

export const ShoppingCartModal = (props: Props) => {
	const [amount, setAmount] = useState(0);

	const handleBtnClick = () => {
		if (!props.item) return;

		updateItemQuantity(props.item, amount);
		removeItemToShoppingCart(props.item);
		props.onClose();
		setAmount(0);
	};

	return (
		<Modal
			open={props.isOpen}
			onClose={props.onClose}
			closeIcon={<X />}
			center
		>
			{props.item && (
				<div className="flex flex-col gap-2">
					<p>
						Buy {props.item.name} {props.item.unit}
					</p>
					<input
						type="number"
						placeholder="Amount"
						value={amount}
						className="rounded border border-solid border-black p-2"
						onChange={(e) => {
							setAmount(e.currentTarget.valueAsNumber);
						}}
					/>
					<div className="flex justify-end">
						<Button
							text={<Check size={18} />}
							smallPadding
							onClick={handleBtnClick}
						/>
					</div>
				</div>
			)}
		</Modal>
	);
};
