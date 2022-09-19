import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from "@testing-library/react";
import { Signup } from "./Signup";

test("signup form", () => {
    render(
        <Router>
            <Signup />
        </Router>
    );

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
})