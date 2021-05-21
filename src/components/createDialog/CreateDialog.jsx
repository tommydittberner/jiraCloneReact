import './CreateDialog.scss';
import CreateDialogHeader from "./CreateDialogHeader";
import CreateDialogForm from "./CreateDialogForm";

export default function CreateDialog({open, closeDialog, submit}) {
    return (
        //Todo: onClick={closeDialog} when clicking on the overlay?
        <div className={open ? "overlay" : "dialog-hidden"}>
            <div className="dialog-wrapper">
                <div className={open ? "dialog" : "dialog-hidden"}>
                    <CreateDialogHeader closeDialog={closeDialog}/>
                    <CreateDialogForm submit={submit}/>
                </div>
            </div>
        </div>
    );
}