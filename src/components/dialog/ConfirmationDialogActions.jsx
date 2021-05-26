import './Dialog.scss';
import {DialogActionButton} from "../../styles/styles";

export default function ConfirmationDialogActions({closeDialog, confirmDeletion}) {
    return (
        <div className="dialog-actions">
            <DialogActionButton onClick={closeDialog}>
                Cancel
            </DialogActionButton>
            <DialogActionButton onClick={confirmDeletion}>
                Yes, I'm sure
            </DialogActionButton>
        </div>
    );
}