import {getByText, render} from '@testing-library/react';
import Sidenav from "./Sidenav";
import {BrowserRouter} from "react-router-dom";

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

        //(/.../i = case insensitive)
        getByText(/done with react/i)
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