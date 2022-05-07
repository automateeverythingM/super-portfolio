import Link, { LinkProps } from "next/link";

interface IInnerLink extends LinkProps {
	children: React.ReactNode;
	className?: string;
}

export const InnerLink = ({ className, children, ...rest }: IInnerLink) => {
	return (
		<Link {...rest}>
			<a className={className}>{children}</a>
		</Link>
	);
};
