import Fuse from "fuse.js";
import { Item } from "./types/item";

export const fuse = new Fuse<Item>([], {
	keys: [
		{
			name: "name",
			getFn: (obj) => obj.name,
		},
	],
});
