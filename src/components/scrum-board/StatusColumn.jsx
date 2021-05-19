import Issue from "./Issue";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {STATUS_TYPES} from "../../util/contants";

export default function StatusColumn(props) {
    const { name, issues } = props;
    return(
        <div className="development-step">
            <div className="status-header">
                {name === STATUS_TYPES.DONE &&
                    <FontAwesomeIcon className="done-icon" icon={faCheckCircle} />
                }
                <span className="status">{name}</span>
                <span className="item-count">{issues.length}</span>
            </div>
            {issues.map((issue, idx) => {
                return (<Issue key={idx} issue={issue}/>)
            })}
        </div>
    );
}