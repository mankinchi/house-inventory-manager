import { Button } from "src/components/button";
import { ButtonType } from "src/components/button/buttonTypes";

interface Props {
	amount: number;
	onClick: (amount: number) => void;
}

export const QuickUpdateBtn = (props: Props) => {
	return (
		<Button
			text={
				props.amount > 0 ? `+${props.amount}` : props.amount.toString()
			}
			type={props.amount >= 0 ? ButtonType.PRIMARY : ButtonType.ERROR}
			onClick={() => {
				props.onClick(props.amount);
			}}
		/>
	);
};
