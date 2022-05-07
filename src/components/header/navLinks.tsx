import clsx from "clsx";
import { InnerLink } from "../button/innerLink";

interface INavLinksProps {
	ulClassName?: string;
	liClassName?: string;
	aClassName?: string;
}

export const NavLinks = ({
	ulClassName,
	liClassName,
	aClassName,
}: INavLinksProps) => {
	return (
		<ul className={ulClassName}>
			<li className={liClassName}>
				<InnerLink
					href="/projects"
					className={clsx("btn btn-cyan shadow-darker", aClassName)}
				>
					Projects
				</InnerLink>
			</li>
			<li className={liClassName}>
				<InnerLink
					href="/blog"
					className={clsx("btn btn-red shadow-darker", aClassName)}
				>
					Blog
				</InnerLink>
			</li>
			<li className={liClassName}>
				<InnerLink
					href="/components"
					className={clsx("btn btn-green shadow-darker", aClassName)}
				>
					Components
				</InnerLink>
			</li>
			<li className={liClassName}>
				<InnerLink
					href="/about"
					className={clsx("btn btn-yellow shadow-darker", aClassName)}
				>
					About
				</InnerLink>
			</li>
		</ul>
	);
};
