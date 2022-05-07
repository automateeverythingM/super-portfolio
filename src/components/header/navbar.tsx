// components
import React, { useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";

//components
import { HamburgerButton } from "../button/hamburgerButton";
import { Logo } from "../logo/logo";
import { NavLinks } from "./navLinks";

//hooks
import { useScrollLock } from "src/hooks/useScrollLock";

interface INavbarProps {}

export const Navbar = ({}: INavbarProps) => {
	const [isOffTop, setIsOffTop] = useState<boolean>(false);
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const { lockScroll, unlockScroll } = useScrollLock();

	useEffect(() => {
		handleScrollOffset();
		window.addEventListener("scroll", handleScrollOffset);
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("scroll", handleScrollOffset);
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const handleScrollOffset = useCallback(() => {
		if (window.scrollY > 0) {
			setIsOffTop(true);
		} else {
			setIsOffTop(false);
		}
	}, []);

	const setIsOpenWrapper = useCallback(() => {
		setIsOpen((prev) => {
			if (prev) {
				unlockScroll();
			} else {
				lockScroll();
			}
			return !prev;
		});
	}, []);

	const handleResize = useCallback(() => {
		if (window.matchMedia("(min-width: 768px)").matches) {
			unlockScroll();
			setIsOpen(false);
		}
	}, []);

	const toggleOpen = useCallback(
		() => setIsOpenWrapper(),
		[setIsOpenWrapper]
	);

	return (
		<header
			className={clsx(
				"sticky top-0 bg-white border-b-2",
				isOffTop ? "border-black bg-slate-50" : "border-white"
			)}
		>
			<div className="flex items-center container">
				<nav className="w-full justify-between items-center py-5 flex w-">
					<Logo
						className={clsx(
							"z-10",
							isOffTop
								? "text-lg h-16 w-16"
								: "text-4xl h-24 w-24"
						)}
					/>
					<NavLinks ulClassName="bg-white hidden md:flex" />
					<NavLinks
						ulClassName={clsx(
							"flex flex-col fixed inset-0 items-center justify-center transition-all duration-500 bg-stone-50 md:hidden",
							{ "translate-x-full": !isOpen }
						)}
						liClassName="w-48 sm:w-full text-center"
						aClassName="max-w-sm w-full !mx-0"
					/>
				</nav>
				<HamburgerButton isOpen={isOpen} onClick={toggleOpen} />
			</div>
		</header>
	);
};
