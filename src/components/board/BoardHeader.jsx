import './BoardHeader.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisH} from "@fortawesome/free-solid-svg-icons";

export default function BoardHeader() {
    return(
        <div className="board-header">
            <h1>Board</h1>
            <button className="board-release-btn">release</button>
            <FontAwesomeIcon className="board-header-settings" icon={faEllipsisH}/>
        </div>
    );
}