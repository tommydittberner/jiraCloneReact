import CreateDialogHeader from "./CreateDialogHeader";
import CreateForm from "../form/CreateForm";
import {DialogWrapper, Overlay, StyledCreateDialog} from "../../styles/styles";

export default function CreateDialog({open, closeDialog, addIssue}) {
    return (
        open ? (
             //Todo: onClick={closeDialog} when clicking on the overlay?
            <Overlay>
                <DialogWrapper>
                    <StyledCreateDialog>
                        <CreateDialogHeader closeDialog={closeDialog}/>
                        <CreateForm addIssue={addIssue}/>
                    </StyledCreateDialog>
                </DialogWrapper>
            </Overlay>
        ) : <></>
    );
}