import clsx from "clsx";
import React from "react";
import { ToggleButton } from "./toggleButton";

interface IHamburgerButtonProps {
	isOpen: boolean;
	onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const HamburgerButton = ({ isOpen, onClick }: IHamburgerButtonProps) => {
	return (
		<div
			className={clsx("ham-button", { "ham-close": isOpen })}
			onClick={onClick}
		>
			<div />
			<div />
			<div />
		</div>
	);
};
