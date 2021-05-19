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
                <li>
                    <FontAwesomeIcon icon={faStream} />
                    <span className="menu-title">Backlog</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faColumns} />
                    <span className="menu-title">Board</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faChartLine} />
                    <span className="menu-title">Reports</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faShippingFast} />
                    <span className="menu-title">Releases</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faClone} />
                    <span className="menu-title">Components</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faTasks} />
                    <span className="menu-title">Issues</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faDatabase} />
                    <span className="menu-title">Repository</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faPlusSquare} />
                    <span className="menu-title">Add Item</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faCog} />
                    <span className="menu-title">Settings</span>
                </li>
            </ul>
        </div>
    );
}