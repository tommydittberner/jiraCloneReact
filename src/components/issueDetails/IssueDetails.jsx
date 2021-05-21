import './IssueDetails.scss';
import {Link, useHistory} from "react-router-dom";
import DetailsForm from "../DetailsForm";

export default function IssueDetails() {
    let history = useHistory();
    const issue = history.location.state;

    const updateIssue = (values) => {
        console.log(values);
    }

    return (
        <div className="details-wrapper">
            <ul>
                <li>
                    <Link to="/board">Go back</Link>
                </li>
            </ul>
            <div className="form-wrapper">
                <DetailsForm update={updateIssue} issue={issue} />
            </div>
        </div>
    );
}