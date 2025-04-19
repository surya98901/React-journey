import { Contact } from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"


test("Contact component should render correctly", () => {
    render(<Contact />);
    // expect(contact).toMatchSnapshot();
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
});
test("Contact component should have button", () => {
    render(<Contact />);
    // expect(contact).toMatchSnapshot();
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
});