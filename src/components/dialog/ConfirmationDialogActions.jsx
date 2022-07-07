import {DialogActionButton, DialogActionGroup} from "../../styles/styles";

export default function ConfirmationDialogActions({closeDialog, confirmDeletion}) {
    return (
        <DialogActionGroup>
            <DialogActionButton onClick={closeDialog}>
                Cancel
            </DialogActionButton>
            <DialogActionButton onClick={confirmDeletion}>
                Yes, I'm sure
            </DialogActionButton>
        </DialogActionGroup>
    );
}