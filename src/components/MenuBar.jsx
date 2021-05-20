import './MenuBar.scss';
import {faPlus, faQuestionCircle, faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faJira} from "@fortawesome/free-brands-svg-icons";

export default function MenuBar() {
    return (
        <aside className="menu-bar">
            <div className="menu-bar-header">
                <FontAwesomeIcon className="menu-bar-icon" icon={faJira} size="2x" />
            </div>
            <div className="menu-bar-buttons">
                <FontAwesomeIcon className="menu-bar-icon" icon={faSearch} size="lg"/>
                <FontAwesomeIcon className="menu-bar-icon" icon={faPlus} size="lg"/>
                <FontAwesomeIcon className={`menu-bar-icon menu-bar-bottom-icon`}
                                 icon={faQuestionCircle}
                                 size="lg"
                />
            </div>
        </aside>
    );
}