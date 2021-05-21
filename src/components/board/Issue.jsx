import './Issue.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {getPriorityColor, getPriorityIcon, getTypeColor, getTypeIcon} from "../../util/util"
import ReactTooltip from "react-tooltip";
import {useHistory} from "react-router-dom";

export default function Issue({issue}) {
    const history = useHistory();

    const navigateToDetails = () => {
        history.push({
            pathname: `issues/${issue.id}`,
            state: issue,
        });
    }

    return (
        <div className="issue-card" onClick={navigateToDetails}>
            <div className="issue-title">
                <span>{issue.title}</span>
            </div>
            <div className="issue-info">
                <FontAwesomeIcon
                    className="issue-icon"
                    color={getTypeColor(issue.type)}
                    icon={getTypeIcon(issue.type)}
                    data-tip={issue.type}
                />
                <FontAwesomeIcon
                    className="issue-icon"
                    color={getPriorityColor(issue.priority)}
                    icon={getPriorityIcon(issue.priority)}
                    data-tip={issue.priority}
                />
                <span className="issue-sp">{issue.storypoints}</span>
                <span className="issue-id">RFM-{issue.id}</span>
            </div>
            <ReactTooltip className="tooltip" place="bottom" type="dark" effect="solid" delayShow={200}/>
        </div>
    );

}