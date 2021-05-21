import './StatusColumnHeader.scss';
import {STATUS_TYPES} from "../../util/contants";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {removeUnderscore} from "../../util/util";

export default function StatusColumnHeader({column}) {
    return (
        <div className="status-column-header">
            {
                column.name === STATUS_TYPES.DONE &&
                <FontAwesomeIcon className="done-icon" icon={faCheckCircle}/>
            }
            <span>{removeUnderscore(column.name)} </span>
            <span>{column.items.length}</span>
        </div>
    );
}