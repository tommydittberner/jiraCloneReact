import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import DetailsForm from "./DetailsForm";
import userEvent from "@testing-library/user-event";

describe('DetailsForm', () => {
    let mockIssue;
    let handleSubmit;
    let handleDelete;

    beforeAll(() => {
        mockIssue = {
            id: 1,
            title: '',
            description: '',
            issueType: 'BUG',
            issuePriority: 'NORMAL',
            storypoints: 3,
        }
    })

    beforeEach(() => {
        handleSubmit = jest.fn();
        handleDelete = jest.fn();
        render(<DetailsForm issue={mockIssue} onSubmit={handleSubmit} onDelete={handleDelete}/>)
    })

    test('has readonly ID', () => {
        expect(screen.getByLabelText(/id/i)).toBeDisabled()
    })

    test('displays user inputted text', async () => {
        const validText = "This text has less than seventy characters in it and should be valid." //69

        //userEvent.type simulates user input keystroke by keystroke
        userEvent.type(screen.getByLabelText(/title/i), validText)

        //firEvent.change changes the input as a whole
        // fireEvent.change(screen.getByLabelText(/title/i), { target: { value: validText } })

        await waitFor(() => {
            //queryBy - because getBy evaluates immediately and would return false!
            expect(screen.queryByTestId(/input-error/i)).toBe(null);
            expect(screen.getByLabelText(/title/i)).toHaveValue(validText);
        })
    })

    test('shows "required" error message', async () => {
        const errorMsg = "Required"

        fireEvent.blur(screen.getByLabelText(/title/i))

        await waitFor(() => {
            expect(screen.getByTestId(/input-error/i)).toHaveTextContent(errorMsg);
        })
    })

    test('shows "max length exceeded" error message', async () => {
        const invalidText = "This text has more than seventy characters in it and should be invalid." //71
        const errorMsg = "Must be 70 characters or less"
        const inputField = screen.getByLabelText(/title/i)

        fireEvent.blur(inputField)
        userEvent.type(inputField, invalidText)

        await waitFor(() => {
            expect(screen.getByTestId(/input-error/i)).toHaveTextContent(errorMsg);
        })
    })

    test('submit is initially disabled', () => {
        expect(screen.getByRole('button', { name: /update/i})).toBeDisabled()
    })

    // test('returns inputted values on submit', async () => {
    //     const titleField = screen.getByLabelText(/title/i);
    //     const descriptionField = screen.getByLabelText(/description/i);
    //     const submitBtn = screen.getByRole('button', { name: /update/i})
    //
    //     userEvent.type(titleField, "my title")
    //     fireEvent.blur(descriptionField)
    //     userEvent.type(descriptionField, "my description")
    //     userEvent.selectOptions(screen.getByLabelText(/type/i), 'task')
    //
    //     expect(submitBtn).toBeEnabled()
    //     userEvent.click(submitBtn);
    //
    //     fireEvent.submit(form);
    //
    //     await waitFor(() =>
    //         expect(handleSubmit).toHaveBeenCalledTimes(1)
    //     )
    // })

    test('delete button click works', async () => {
        userEvent.click(screen.getByTitle(/delete/i));

        await waitFor(() => {
            expect(handleDelete).toHaveBeenCalledTimes(1);
        })
    })

})