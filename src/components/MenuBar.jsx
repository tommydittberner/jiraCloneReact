import {faPlus, faQuestionCircle, faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faJira} from "@fortawesome/free-brands-svg-icons";

export default function MenuBar() {
    return (
        <aside className="menu-bar">
            <div className="menu-bar-header">
                <FontAwesomeIcon className="icon" icon={faJira} size="2x" />
            </div>
            <div className="menu-bar-buttons">
                <FontAwesomeIcon className="icon" icon={faSearch} size="lg"/>
                <FontAwesomeIcon className="icon" icon={faPlus} size="lg"/>
                <FontAwesomeIcon className="icon-btm" icon={faQuestionCircle} size="lg"/>
            </div>
        </aside>
    );
}