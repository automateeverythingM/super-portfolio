import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { HamburgerButton } from "../hamburgerButton";

test("should render", () => {
	render(<HamburgerButton isOpen={true} onClick={() => {}} />);
});

test("isOpen should toggle class", () => {
	const doc = render(<HamburgerButton isOpen={false} onClick={() => {}} />);

	expect(doc.container.querySelector(":first-child")).not.toHaveClass(
		"ham-close"
	);

	doc.rerender(<HamburgerButton isOpen={true} onClick={() => {}} />);
	expect(doc.container.querySelector(":first-child")).toHaveClass(
		"ham-close"
	);
});
