import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from "@testing-library/react";
import { Signup } from "./Signup";

describe("signup form", () => {
    render(
        <Router>
            <Signup />
        </Router>
    );
    it(" Signup", async () => {
        const firstName = screen.getByTestId("firstName");
        const lastName = screen.getByTestId("lastName");
        const email = screen.getByTestId("email");
        const password = screen.getByTestId("password");
        const confirmPassword = screen.getByTestId("confirmPassword");

        expect(firstName).toBeInTheDocument();
        expect(lastName).toBeInTheDocument();
        expect(email).toBeInTheDocument();
        expect(password).toBeInTheDocument();
        expect(confirmPassword).toBeInTheDocument();
    });
    it("Button", async () => {
        render(<Router><Signup /></Router>);

        const buttonComponent = await screen.findAllByRole("button");
        expect(buttonComponent).toHaveLength(2);
    });

    it("placeHolder", async () => {
        render(
            <Router><Signup /></Router>
        )

        const firstName = screen.getByPlaceholderText("Enter your FirstName");
        const lastName = screen.getByPlaceholderText("Enter your LastName");
        const email = screen.getByPlaceholderText("Enter your Email");
        const password = screen.getByPlaceholderText("Enter your Password");
        const confirmPassword = screen.getByPlaceholderText("Enter your ConfirmPassword");

        expect(firstName).toHaveAttribute("type", "text");
        expect(lastName).toHaveAttribute("type", "text");
        expect(email).toHaveAttribute("type", "email");
        expect(password).toHaveAttribute("type", "password");
        expect(confirmPassword).toHaveAttribute("type", "password");

    })
})