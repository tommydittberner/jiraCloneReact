import './CreateDialog.scss';
import CreateDialogHeader from "./CreateDialogHeader";
import CreateDialogForm from "./CreateDialogForm";

export default function CreateDialog({open, closeDialog, addIssue}) {
    return (
        //Todo: onClick={closeDialog} when clicking on the overlay?
        <div className={open ? "overlay" : "dialog-hidden"}>
            <div className="dialog-wrapper">
                <div className={open ? "dialog" : "dialog-hidden"}>
                    <CreateDialogHeader closeDialog={closeDialog}/>
                    <CreateDialogForm addIssue={addIssue}/>
                </div>
            </div>
        </div>
    );
}