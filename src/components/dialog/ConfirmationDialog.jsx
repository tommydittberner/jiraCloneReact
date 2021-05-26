import './Dialog.scss'
import ConfirmationDialogHeader from "./ConfirmationDialogHeader";
import ConfirmationDialogActions from "./ConfirmationDialogActions";
import {DialogWrapper, Overlay, StyledConfirmationDialog} from "../../styles/styles";

export default function ConfirmationDialog({issueId, open, closeDialog, confirmDeletion}) {
    //this should be passed in to make it more reusable later on
    const message = "This issue will be forever deleted and there is no chance to get it back later on.";

    return (
        <Overlay className={open || "dialog-hidden"}>
          <DialogWrapper>
              <StyledConfirmationDialog className={open || "dialog-hidden"}>
                  <ConfirmationDialogHeader
                      issueId={issueId}
                      closeDialog={closeDialog}
                  />
                  <p>{message}</p>
                  <ConfirmationDialogActions
                      closeDialog={closeDialog}
                      confirmDeletion={confirmDeletion}
                  />
              </StyledConfirmationDialog>
          </DialogWrapper>
      </Overlay>
    );
}