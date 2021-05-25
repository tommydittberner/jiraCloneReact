import './Dialog.scss';
import CreateDialogHeader from "./CreateDialogHeader";
import CreateForm from "../form/CreateForm";

export default function CreateDialog({open, closeDialog, addIssue}) {
    return (
        //Todo: onClick={closeDialog} when clicking on the overlay?
        <div className={open ? "overlay" : "dialog-hidden"}>
            <div className="dialog-wrapper">
                <div className={open ? `dialog create-dialog` : "dialog-hidden"}>
                    <CreateDialogHeader closeDialog={closeDialog}/>
                    <CreateForm addIssue={addIssue}/>
                </div>
            </div>
        </div>
    );
}