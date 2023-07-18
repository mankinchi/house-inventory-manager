import { useEffect, useState } from "react";
import { subscribeToItems } from "../../firebase/database";
import { Item } from "../../types/item";
import { ItemRow } from "./itemRow";

export const ExistingTable = () => {
	const [items, setItems] = useState<Item[]>([]);

	useEffect(() => {
		subscribeToItems((items) => {
			setItems(items);
		});
	}, []);

	return (
		<table className="table-fixed border-collapse bg-white">
			<thead>
				<tr>
					<th className="w-40 border border-solid border-black">
						Name
					</th>
					<th className="w-32 border border-solid border-black">
						Amount
					</th>
					<th className="border border-solid border-black">Update</th>
					<th className="border border-solid border-black">
						Quick Update
					</th>
					<th className="w-20 border border-solid border-black">
						Actions
					</th>
				</tr>
			</thead>
			<tbody>
				{items.map((item) => (
					<ItemRow
						key={item.id}
						item={item}
					/>
				))}
			</tbody>
		</table>
	);
};
