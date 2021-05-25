import './Dialog.scss';

export default function ConfirmationDialogActions({closeDialog, confirmDeletion}) {
    return (
        <div className="dialog-actions">
            <button onClick={closeDialog}>
                Cancel
            </button>
            <button onClick={confirmDeletion}>
                Yes, I'm sure
            </button>
        </div>
    );
}