import { useEffect, useState } from "react";
import { Check, X } from "react-feather";
import { Button } from "src/components/button";
import { ButtonType } from "src/components/button/buttonTypes";
import { removeItemToShoppingCart, subscribeToItems } from "src/firebase/items";
import { Item } from "src/types/item";
import { ShoppingCartModal } from "./shoppingCartModal";

export const ShoppingCart = () => {
	const [items, setItems] = useState<Item[]>([]);
	const [selectedItem, setSelectedItem] = useState<Item>();
	const [showModal, setShowModal] = useState(false);

	const handleModalOpen = () => setShowModal(true);
	const handleModalClose = () => setShowModal(false);

	const handleBuyBtnClick = (item: Item) => () => {
		setSelectedItem(item);
		handleModalOpen();
	};

	const handleRemoveFromCartBtnClick = (item: Item) => () => {
		removeItemToShoppingCart(item);
	};

	useEffect(() => {
		subscribeToItems((items) => {
			setItems(items);
		});
	}, []);

	return (
		<div className="flex flex-col gap-2">
			<div className="text-lg font-bold">Shopping Cart</div>
			<table>
				<thead>
					<tr>
						<th className="border border-solid border-black p-2 text-left">
							Item
						</th>
						<th className="border border-solid border-black p-2 text-left">
							Remain
						</th>
						<th className="border border-solid border-black p-2 text-left">
							Actions
						</th>
					</tr>
				</thead>
				<tbody>
					{items
						.filter((item) => item.inShoppingCart)
						.map((item) => (
							<tr
								key={item.id}
								className="divide-x divide-black border border-solid border-black"
							>
								<td className=" p-2">{item.name}</td>
								<td className=" p-2">{`${item.amount} ${item.unit}`}</td>
								<td className=" p-2">
									<div className="flex gap-2">
										<Button
											text={<Check size={18} />}
											smallPadding
											onClick={handleBuyBtnClick(item)}
										/>
										<Button
											text={<X size={18} />}
											smallPadding
											type={ButtonType.ERROR}
											onClick={handleRemoveFromCartBtnClick(
												item,
											)}
										/>
									</div>
								</td>
							</tr>
						))}
				</tbody>
			</table>
			<ShoppingCartModal
				isOpen={showModal}
				item={selectedItem}
				onClose={handleModalClose}
			/>
		</div>
	);
};
