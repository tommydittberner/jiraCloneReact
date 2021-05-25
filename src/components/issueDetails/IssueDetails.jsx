import './IssueDetails.scss';
import {Link, useHistory} from "react-router-dom";
import DetailsForm from "../form/DetailsForm";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import ConfirmationDialog from "../dialog/ConfirmationDialog";
import { useState } from "react";


export default function IssueDetails({updateIssue, deleteIssue}) {
    let history = useHistory();
    const issue = history.location.state;

    const [confirmOpen, setConfirmOpen] = useState(false);

    const navigateToBoard = () => {
        history.replace('/board');
    }

    const openConfirmationDialog = () => setConfirmOpen(true);
    const closeConfirmationDialog = () => setConfirmOpen(false);
    const confirmDeletion = async () => {
        setConfirmOpen(false);
        await deleteIssue(issue.id);
        navigateToBoard();
    }

    return (
        <>
            <ConfirmationDialog
                issueId={issue.id}
                open={confirmOpen}
                closeDialog={closeConfirmationDialog}
                confirmDeletion={confirmDeletion}
            />
            <div className="back-navigation">
                <Link to="/board" className="back-link">
                    <FontAwesomeIcon
                        className="issue-delete-btn"
                        icon={faArrowLeft}
                        size={'lg'}
                    />
                    <span> Back to board</span>
                </Link>
            </div>
            <div className="details-wrapper">
                <div className="form-wrapper">
                    <DetailsForm
                        openConfirmDialog={openConfirmationDialog}
                        updateCallback={updateIssue}
                        deleteCallback={deleteIssue}
                        issue={issue}
                    />
                </div>
            </div>
        </>

);
}
