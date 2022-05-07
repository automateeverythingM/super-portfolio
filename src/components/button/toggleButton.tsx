import { HTMLAttributes, useState } from "react";
import { Button } from "./button";

interface IToggleButton
	extends Omit<HTMLAttributes<HTMLButtonElement>, "children"> {
	onToggle?: () => void;
	children: (toggle: boolean) => React.ReactNode;
}

export const ToggleButton = ({
	children,
	onToggle,
	...rest
}: IToggleButton) => {
	const [toggle, setToggle] = useState(false);
	return (
		<Button
			{...rest}
			onClick={() => {
				setToggle((prev) => !prev);
				onToggle?.();
			}}
		>
			{children(toggle)}
		</Button>
	);
};
