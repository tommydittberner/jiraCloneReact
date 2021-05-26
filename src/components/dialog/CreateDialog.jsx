import './Dialog.scss';
import CreateDialogHeader from "./CreateDialogHeader";
import CreateForm from "../form/CreateForm";
import {DialogWrapper, Overlay, StyledCreateDialog} from "../../styles/styles";

export default function CreateDialog({open, closeDialog, addIssue}) {
    return (
        //Todo: onClick={closeDialog} when clicking on the overlay?
        <Overlay className={open || "dialog-hidden"}>
            <DialogWrapper>
                <StyledCreateDialog className={open || "dialog-hidden"}>
                    <CreateDialogHeader closeDialog={closeDialog}/>
                    <CreateForm addIssue={addIssue}/>
                </StyledCreateDialog>
            </DialogWrapper>
        </Overlay>
    );
}