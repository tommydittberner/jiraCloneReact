import './IssueDetails.scss';
import {Link, useHistory} from "react-router-dom";
import DetailsForm from "../form/DetailsForm";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import ConfirmationDialog from "../dialog/ConfirmationDialog";
import { useState } from "react";
import {doDeleteIssue} from "../../api/issueService";
import {BackNavLink, FAActionIconButton, FAIconButton} from "../../styles/styles";


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
        await doDeleteIssue(issue.id);
        deleteIssue(issue.id);
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
            <BackNavLink>
                <Link to="/board" style={{textDecoration: "none"}}>
                    <FAIconButton>
                        <FontAwesomeIcon
                            icon={faArrowLeft}
                            size={'lg'}
                        />
                    </FAIconButton>
                    <span> Back to board</span>
                </Link>
            </BackNavLink>
            <div className="details-wrapper">
                <div className="form-wrapper">
                    <DetgitailsForm
                        openConfirmDialog={openConfirmationDialog}
                        updateIssue={updateIssue}
                        issue={issue}
                    />
                </div>
            </div>
        </>

);
}
