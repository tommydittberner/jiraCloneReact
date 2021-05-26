import './Issue.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {getPriorityColor, getPriorityIcon, getTypeColor, getTypeIcon} from "../../util/util"
import ReactTooltip from "react-tooltip";
import {useHistory} from "react-router-dom";
import {Card, IDTag, IssueIcon, TextLabel} from "../../styles/styles";

export default function Issue({issue}) {
    const history = useHistory();

    const navigateToDetails = () => {
        history.push({
            pathname: `issues/${issue.id}`,
            state: issue,
        });
    }

    return (
        <Card onClick={navigateToDetails}>
            <header style={{paddingBottom: "1em"}}>
                <span>{issue.title}</span>
            </header>
            <div className="issue-info">
                <IssueIcon iconColor={getTypeColor(issue.type)}>
                    <FontAwesomeIcon
                        style={{margin: "2px 4px"}}
                        icon={getTypeIcon(issue.type)}
                        data-tip={issue.type}
                    />
                </IssueIcon>
                <IssueIcon iconColor={getPriorityColor(issue.priority)}>
                    <FontAwesomeIcon
                        style={{margin: "2px 4px"}}
                        icon={getPriorityIcon(issue.priority)}
                        data-tip={issue.priority}
                    />
                </IssueIcon>
                <TextLabel>{issue.storypoints}</TextLabel>
                <IDTag style={{marginLeft: "auto"}}>RFM-{issue.id}</IDTag>
            </div>
            <ReactTooltip
                className="tooltip"
                place="bottom"
                type="dark"
                effect="solid"
                delayShow={200}
            />
        </Card>
    );

}