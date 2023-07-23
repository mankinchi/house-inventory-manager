import { Search, X } from "react-feather";

interface Props {
	value: string;
	setValue: (newValue: string) => void;
}

export const SearchBox = (props: Props) => {
	const handleClearBtnClick = () => {
		props.setValue("");
	};

	return (
		<div className="flex w-full items-center gap-1 border border-solid border-black p-2 md:w-auto">
			<Search size={16} />
			<input
				type="text"
				className="flex-grow focus:outline-none"
				placeholder="Search"
				value={props.value}
				onChange={(e) => {
					props.setValue(e.currentTarget.value);
				}}
			/>
			<X
				size={16}
				className="cursor-pointer"
				onClick={handleClearBtnClick}
			/>
		</div>
	);
};
