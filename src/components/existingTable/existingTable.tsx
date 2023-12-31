import { useContext, useEffect, useState } from "react";
import { AppContext } from "src/appContext";
import { subscribeToItems } from "src/firebase/items";
import { fuse } from "src/fuse";
import { Item } from "../../types/item";
import { ItemRow } from "./itemRow";
import { SearchBox } from "./searchBox";

export const ExistingTable = () => {
	const { user } = useContext(AppContext);

	const [items, setItems] = useState<Item[]>([]);
	const [filteredItems, setFilteredItems] = useState<Item[]>([]);
	const [searchValue, setSearchValue] = useState("");

	useEffect(() => {
		if (!user) {
			setItems([]);
		} else {
			subscribeToItems((items) => {
				setItems(items);
			});
		}
	}, [user]);

	useEffect(() => {
		fuse.setCollection(items);
	}, [items]);

	useEffect(() => {
		if (!searchValue) {
			setFilteredItems(items);
			return;
		}

		const timerId = setTimeout(() => {
			setFilteredItems(
				fuse.search(searchValue).map((result) => result.item),
			);
		}, 200);

		return () => {
			clearTimeout(timerId);
		};
	}, [searchValue, items]);

	return (
		<div className="flex flex-col gap-2">
			<div className="flex justify-end">
				<SearchBox
					value={searchValue}
					setValue={setSearchValue}
				/>
			</div>
			<div className="overflow-auto">
				<table className="w-full border-collapse bg-white">
					<thead>
						<tr>
							<th className="w-40 border border-solid border-black">
								Name
							</th>
							<th className="border border-solid border-black">
								Amount
							</th>
							<th className="border border-solid border-black">
								Update
							</th>
							<th className="border border-solid border-black">
								Quick Update
							</th>
							<th className="border border-solid border-black">
								Actions
							</th>
						</tr>
					</thead>
					<tbody>
						{filteredItems.map((item) => (
							<ItemRow
								key={item.id}
								item={item}
							/>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};
