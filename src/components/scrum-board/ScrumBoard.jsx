import StatusColumn from "./StatusColumn";
import {STATUS_TYPES} from "../../contants";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisH} from "@fortawesome/free-solid-svg-icons";

export default function ScrumBoard() {
    //get issues and provide them to the corresponding columns
    return(
        <>
            <div className="board-header">
                <h1>Board</h1>
                <button className="release-btn">release</button>
                <FontAwesomeIcon className="board-header-settings" icon={faEllipsisH} />
            </div>
            <div className="scrum-board">
                <StatusColumn name={STATUS_TYPES.OPEN} issues={["First Issue", "Urgent thing"]}/>
                <StatusColumn name={STATUS_TYPES.IN_PROGRESS} issues={["Doing stuff"]}/>
                <StatusColumn name={STATUS_TYPES.PEER_REVIEW} issues={[]}/>
                <StatusColumn name={STATUS_TYPES.DONE} issues={["Already finished"]}/>
            </div>
        </>
    );
}