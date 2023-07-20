import clsx from "clsx";
import { ButtonType } from "./buttonTypes";

interface Props {
	text: string | React.ReactNode;
	type?: ButtonType;
	smallPadding?: boolean;
	disabled?: boolean;
	onClick?: () => void;
}

export const Button = ({
	text,
	type = ButtonType.PRIMARY,
	onClick,
	smallPadding = false,
	disabled = false,
}: Props) => {
	const handleClick = () => {
		if (disabled) return;

		if (onClick) {
			onClick();
		}
	};

	return (
		<button
			className={clsx(
				"h-8 w-fit rounded border border-solid",
				smallPadding ? "px-2" : "px-6",
				type === ButtonType.PRIMARY &&
					"bg-green-300 hover:bg-green-400",
				type === ButtonType.ERROR && "bg-red-300 hover:bg-red-400",
				type === ButtonType.INVERSE &&
					"border-slate-300 bg-white hover:bg-green-400 hover:text-white",
				disabled &&
					"cursor-not-allowed bg-slate-300 hover:bg-slate-400",
			)}
			onClick={handleClick}
		>
			{text}
		</button>
	);
};
