import { render, screen } from "@testing-library/react"
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
    it("Button",async()=>{
        render(<Router><Login/></Router>)
        const loginbtn= await screen.findAllByRole("button");
        expect(loginbtn).toHaveLength(2);
    })

})