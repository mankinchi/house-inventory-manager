import {
	getDatabase,
	onValue,
	push,
	ref,
	remove,
	update,
} from "firebase/database";
import type { Item } from "../types/item";

export const db = getDatabase();

export const addItem = async (item: Partial<Item>) => {
	if (!item.name || item.amount === undefined || !item.unit) return;

	const db = getDatabase();
	await push(ref(db, "items"), {
		...item,
		inShoppingCart: false,
	});
};

export const subscribeToItems = (cb: (value: Item[]) => void) => {
	const dbRef = ref(db, "items");

	onValue(dbRef, (snapshot) => {
		const data = snapshot.val() as {
			[key: string]: Item;
		} | null;

		if (!data) {
			cb([]);
			return;
		}

		cb(
			Object.entries(data).map(([id, item]) => ({
				id,
				...item,
			})),
		);
	});
};

export const updateItemQuantity = (item: Item, amount: number) => {
	if (!item.id) return;

	if (item.amount + amount < 0) return;

	const dbRef = ref(db, "items");

	const changes = {
		[`${item.id}/amount`]: item.amount + amount,
	};

	update(dbRef, changes).catch((e) => {
		console.error(e);
	});
};

const updateItemInShoppingCart = (item: Item, newState: boolean) => {
	if (!item.id) return;

	const dbRef = ref(db, "items");

	const changes = {
		[`${item.id}/inShoppingCart`]: newState,
	};

	update(dbRef, changes).catch((e) => {
		console.error(e);
	});
};

export const addItemToShoppingCart = (item: Item) => {
	updateItemInShoppingCart(item, true);
};

export const removeItemToShoppingCart = (item: Item) => {
	updateItemInShoppingCart(item, false);
};

export const removeItem = (item: Item) => {
	if (!item.id) return;

	const dbRef = ref(db, `items/${item.id}`);

	remove(dbRef).catch((e) => {
		console.error(e);
	});
};
