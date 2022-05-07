import { render, screen } from "@testing-library/react";
import { Emoji } from "../emoji";

test("should render emoji on screen", () => {
	render(<Emoji symbol="🪀" />);
	expect(screen.getByText("🪀")).toBeInTheDocument();
});

test("should set aria-label if preset", () => {
	const { container } = render(<Emoji symbol="🪀" label="Asteroid" />);
	expect(container.querySelector("[aria-label]")).toHaveAttribute(
		"aria-label",
		"Asteroid"
	);
});

test("should set aria-hidden to true if no label present", () => {
	const { container } = render(<Emoji symbol="🪀" />);
	expect(container.querySelector("[aria-hidden]")).toHaveAttribute(
		"aria-hidden",
		"true"
	);
});
