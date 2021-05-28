import './IssueDetails.scss';
import {Link, useHistory} from "react-router-dom";
import DetailsForm from "../form/DetailsForm";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import ConfirmationDialog from "../dialog/ConfirmationDialog";
import {useState} from "react";
import {doDeleteIssue, doUpdateIssue} from "../../api/issueService";
import {BackNavLink, FAIconButton} from "../../styles/styles";
import {toast} from "react-toastify";

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

    const onFormSubmit = async (values) => {
        updateIssue(await doUpdateIssue(issue.id, values));
        toast('Update successful!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
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
                    <DetailsForm
                        issue={issue}
                        onDelete={openConfirmationDialog}
                        onSubmit={onFormSubmit}
                    />
                </div>
            </div>
        </>

);
}
