import clsx from "clsx";
import { HTMLAttributes } from "react";

interface IHeroProps {
    outer?: HTMLAttributes<HTMLDivElement>;
    inner?: HTMLAttributes<HTMLDivElement>;
    children?: React.ReactNode;
}

export const Section = ({
    outer = {},
    inner = {},
    children = undefined,
}: IHeroProps) => {
    const { className: OClassName, ...restOuter } = outer;
    const { className: IClassName, ...restInner } = inner;
    return (
        <div className={clsx("", OClassName)} {...restOuter}>
            <div className={clsx("container mx-auto", IClassName)} {...restInner}>
                {children}
            </div>
        </div>
    );
};
