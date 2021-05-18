import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckSquare, faCog, faStream} from "@fortawesome/free-solid-svg-icons";
import {faReact} from "@fortawesome/free-brands-svg-icons";

export default function Sidenav() {
    return(
        <div className="sidenav">
            <div className="sidenav-header">
                <FontAwesomeIcon icon={faReact} size="3x" />
                <div className="sidenav-titles">
                    <span className="project-title">ITF Refinement</span>
                    <span className="project-subtitle">Done with React</span>
                </div>
            </div>
            <ul className="sidenav-items">
                <li>
                    <FontAwesomeIcon icon={faStream} />
                    <span className="menu-title">Backlog</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faCheckSquare} />
                    <span className="menu-title">Board</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faCog} />
                    <span className="menu-title">Settings</span>
                </li>
            </ul>
        </div>
    );
}