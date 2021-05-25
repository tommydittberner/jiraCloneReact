import './IssueDetails.scss';
import {Link, useHistory} from "react-router-dom";
import DetailsForm from "../DetailsForm";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";


export default function IssueDetails({update}) {
    let history = useHistory();
    const issue = history.location.state;

    return (
        <>
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
                    <DetailsForm update={update} issue={issue} />
                </div>
            </div>
        </>

);
}
