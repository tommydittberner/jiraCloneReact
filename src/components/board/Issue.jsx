import './Issue.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {getPriorityColor, getPriorityIcon, getTypeColor, getTypeIcon} from "../../util/util"
import ReactTooltip from "react-tooltip";
import {useHistory} from "react-router-dom";
import {Card, IDTag, TextLabel} from "../../styles/styles";

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
                <FontAwesomeIcon
                    style={{margin: "2px 4px"}}
                    color={getTypeColor(issue.type)}
                    icon={getTypeIcon(issue.type)}
                    data-tip={issue.type}
                />
                <FontAwesomeIcon
                    style={{margin: "2px 4px"}}
                    color={getPriorityColor(issue.priority)}
                    icon={getPriorityIcon(issue.priority)}
                    data-tip={issue.priority}
                />
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