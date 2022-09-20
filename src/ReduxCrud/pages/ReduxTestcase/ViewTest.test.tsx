import { render as rtlrender, cleanup, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../redux/Store';
import View from "../View"




describe("Book Form", () => {
    const renders = (component: any) => rtlrender(<Provider store={store}>{component}</Provider>);

    it("Book Now", async () => {
        renders(<Router><View /></Router>)
        const name = screen.getByTestId("name");
        const phonenumber = screen.getByTestId("phonenumber");
        const pickup = screen.getByTestId("pickup");
        const date = screen.getByTestId("date");
        const email = screen.getByTestId("email");
        const nopass = screen.getByTestId("nopass");
        const drop = screen.getByTestId("drop");
        const time = screen.getByTestId("time");


        expect(name).toBeInTheDocument();
        expect(phonenumber).toBeInTheDocument();
        expect(pickup).toBeInTheDocument();
        expect(date).toBeInTheDocument();
        expect(email).toBeInTheDocument();
        expect(nopass).toBeInTheDocument();
        expect(drop).toBeInTheDocument();
        expect(time).toBeInTheDocument();

    });
    it("button", async () => {
        renders(<Router><View /></Router>)
        const loginbtn = await screen.findAllByRole("button");
        expect(loginbtn).toHaveLength(2);
    })



})