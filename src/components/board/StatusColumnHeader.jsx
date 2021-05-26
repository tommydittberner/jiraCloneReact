import './StatusColumnHeader.scss';
import {STATUS_TYPES} from "../../util/contants";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {removeUnderscore} from "../../util/util";
import {StyledStatusColumnHeader} from "../../styles/styles";

export default function StatusColumnHeader({column}) {
    return (
        <StyledStatusColumnHeader>
            {
                column.name === STATUS_TYPES.DONE &&
                <FontAwesomeIcon className="done-icon" icon={faCheckCircle}/>
            }
            <span>{removeUnderscore(column.name)} </span>
            <span>{column.items.length}</span>
        </StyledStatusColumnHeader>
    );
}