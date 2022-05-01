import Link, { LinkProps } from "next/link";
import { HTMLAttributes } from "react";

interface IInnerLink extends HTMLAttributes<HTMLAnchorElement>, LinkProps {}

export function InnerLink({ className, children, ...rest }: IInnerLink) {
  return (
    <Link {...rest}>
      <a className={className}>{children}</a>
    </Link>
  );
}
