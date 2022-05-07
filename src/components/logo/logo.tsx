import clsx from "clsx";
import { InnerLink } from "../button/innerLink";

interface ILogoProps {
	className?: string;
}

export const Logo = ({ className }: ILogoProps) => {
	return (
		<div className="flex w-full sm:w-auto">
			<InnerLink
				href="/"
				className={clsx(
					"f_center rounded-full bg-red-700 text-white mx-3 font-bold border-8 border-red-500 transition-all",
					className
				)}
			>
				MP
			</InnerLink>
		</div>
	);
};
