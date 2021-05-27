import {fireEvent, getByRole, getByText, render, screen} from '@testing-library/react';
import Sidenav from "../components/Sidenav";
import {BrowserRouter} from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe('Sidenav', () => {
    test('renders header correctly', () => {
        //implicit style
        const { getByText } = render(
            <BrowserRouter>
                <Sidenav/>
            </BrowserRouter>
        );

        // getBy - returns an element or an error
        // queryBy - use when you are asserting an element that isn't there
        // findBy - used for asynchronous elements which will be there eventually
        getByText("Done with React")
        // full text match
        getByText("ITF Refinement")
        // partial match through regex
        // getByText(/ITF/)

        //explicit style
        // render(
        //     <BrowserRouter>
        //         <Sidenav/>
        //     </BrowserRouter>
        // );
        //
        // expect(screen.getByText("ITF Refinement")).toBeInTheDocument();
        // expect(screen.getByText("Done with React")).toBeInTheDocument();
    });
})