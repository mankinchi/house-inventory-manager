import clsx from "clsx";
import { ButtonType } from "./buttonTypes";

interface Props {
	text: string | React.ReactNode;
	type?: ButtonType;
	smallPadding?: boolean;
	onClick: () => void;
}

export const Button = ({
	text,
	type = ButtonType.PRIMARY,
	onClick,
	...props
}: Props) => {
	return (
		<button
			className={clsx(
				"w-fit h-8 border border-solid rounded",
				props.smallPadding ? "px-2" : "px-6",
				type === ButtonType.PRIMARY &&
					"bg-green-300 hover:bg-green-400",
				type === ButtonType.ERROR && "bg-red-300 hover:bg-red-400",
				type === ButtonType.INVERT &&
					"border-green-300 bg-white hover:bg-green-300 hover:text-white",
			)}
			onClick={onClick}
		>
			{text}
		</button>
	);
};
