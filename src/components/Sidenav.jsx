import './Sidenav.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faChartLine,
    faClone,
    faCog,
    faColumns,
    faDatabase,
    faPlusSquare,
    faShippingFast,
    faStream,
    faTasks
} from "@fortawesome/free-solid-svg-icons";
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
                <li className="menu-disabled">
                    <FontAwesomeIcon icon={faStream} />
                    <span>Backlog</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faColumns} />
                    <span>Board</span>
                </li>
                <li className="menu-disabled">
                    <FontAwesomeIcon icon={faChartLine} />
                    <span>Reports</span>
                </li>
                <li className="menu-disabled">
                    <FontAwesomeIcon icon={faShippingFast} />
                    <span>Releases</span>
                </li>
                <li className="menu-disabled">
                    <FontAwesomeIcon icon={faClone} />
                    <span>Components</span>
                </li>
                <li className="menu-disabled">
                    <FontAwesomeIcon icon={faTasks} />
                    <span>Issues</span>
                </li>
                <li className="menu-disabled">
                    <FontAwesomeIcon icon={faDatabase} />
                    <span>Repository</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faPlusSquare} />
                    <span>Add Item</span>
                </li>
                <li className="menu-disabled">
                    <FontAwesomeIcon icon={faCog} />
                    <span>Settings</span>
                </li>
            </ul>
        </div>
    );
}