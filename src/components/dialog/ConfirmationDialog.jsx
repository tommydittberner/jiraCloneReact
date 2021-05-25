import './Dialog.scss'
import ConfirmationDialogHeader from "./ConfirmationDialogHeader";
import ConfirmationDialogActions from "./ConfirmationDialogActions";

export default function ConfirmationDialog({issueId, open, closeDialog, confirmDeletion}) {
    //this should be passed in to make it more reusable later on
    const message = "This issue will be forever deleted and there is no chance to get it back later on.";

    return (
        <div className={open ? "overlay" : "dialog-hidden"}>
          <div className="dialog-wrapper">
              <div className={open ? `dialog confirmation-dialog` : "dialog-hidden"}>
                  <ConfirmationDialogHeader
                      issueId={issueId}
                      closeDialog={closeDialog}
                  />
                  <p>{message}</p>
                  <ConfirmationDialogActions
                      closeDialog={closeDialog}
                      confirmDeletion={confirmDeletion}
                  />
              </div>
          </div>
      </div>
    );
}