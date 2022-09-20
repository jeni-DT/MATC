import { render, screen } from "@testing-library/react"
import { BrowserRouter as Router } from 'react-router-dom';
import { Login } from "./Login"




describe("Login Form", () => {
    render(<Router><Login /></Router>)
    it("Login", async () => {

        const email = screen.getByTestId("email");
        const password = screen.getByTestId("password");
        const confirmPassword = screen.getByTestId("confirmPassword");


        expect(email).toBeInTheDocument();
        expect(password).toBeInTheDocument();
        expect(confirmPassword).toBeInTheDocument();
    });
    it("Button", async () => {
        render(<Router><Login /></Router>)
        const loginbtn = await screen.findAllByRole("button");
        expect(loginbtn).toHaveLength(2);
    });
    it("placeHolder ", async () => {
        render(
            <Router><Login /></Router>
        )


        const email = screen.getByPlaceholderText("Enter your Email");
        const password = screen.getByPlaceholderText("Enter your Password");
        const confirmPassword = screen.getByPlaceholderText("Enter your ConfirmPasword");


        expect(email).toHaveAttribute("type", "email");
        expect(password).toHaveAttribute("type", "password");
        expect(confirmPassword).toHaveAttribute("type", "password");

    })

})