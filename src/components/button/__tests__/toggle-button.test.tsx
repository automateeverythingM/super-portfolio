import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ToggleButton } from "../toggleButton";
import { act } from "react-dom/test-utils";
test("should render toggle button with content", () => {
	render(<ToggleButton>{(toggle) => `rendered`}</ToggleButton>);
	expect(screen.getByText(/rendered/i)).toBeInTheDocument();
});

test("toggle should be false initially", () => {
	render(
		<ToggleButton>{(toggle) => (toggle ? "true" : "false")}</ToggleButton>
	);
	expect(screen.getByText(/false/i)).toBeInTheDocument();
});

test("toggle should be true after click", async () => {
	render(
		<ToggleButton>{(toggle) => (toggle ? "true" : "false")}</ToggleButton>
	);
	act(() => {
		screen.getByRole("button").click();
	});
	await screen.findByText(/true/i);
});

test("toggle should be false after click twice", async () => {
	render(
		<ToggleButton>{(toggle) => (toggle ? "true" : "false")}</ToggleButton>
	);
	act(() => {
		screen.getByRole("button").click();
		screen.getByRole("button").click();
	});
	await screen.findByText(/false/i);
});
