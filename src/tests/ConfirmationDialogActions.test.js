import {render, fireEvent} from "@testing-library/react";
import ConfirmationDialogActions from "../components/dialog/ConfirmationDialogActions";

describe('ConfirmationDialogActions', () => {
    test('shows cancel button', () => {
        const handleCancel = jest.fn();

        const { getByText } = render(
          <ConfirmationDialogActions closeDialog={handleCancel}/>
        );

        const cancelBtn = getByText('Cancel');
        fireEvent.click(cancelBtn);
        expect(handleCancel).toHaveBeenCalledTimes(1);
    });

    test('shows confirmation button', () => {
       const handleConfirm = jest.fn();

       const { getByText } = render(
           <ConfirmationDialogActions confirmDeletion={handleConfirm} />
       )

        const confirmBtn = getByText('Yes, I\'m sure');
        fireEvent.click(confirmBtn);
        expect(handleConfirm).toHaveBeenCalledTimes(1);
    });
})