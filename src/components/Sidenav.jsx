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
import {Link} from "react-router-dom";
import {Header, JiraSidenav, List, ListItemTextAndIcon} from "../styles/styles";

export default function Sidenav({openCreateDialog}) {
    return (
        <JiraSidenav>
            <Header>
                <FontAwesomeIcon icon={faReact} size="3x"/>
                <section style={{paddingLeft: "8px"}}>
                    <span style={{display: "block", fontWeight: "bold"}}>ITF Refinement</span>
                    <span style={{display: "block"}}>Done with React</span>
                </section>
            </Header>
            <List>
                <ListItemTextAndIcon className="menu-disabled">
                    <FontAwesomeIcon icon={faStream}/>
                    <span>Backlog</span>
                </ListItemTextAndIcon>
                <Link to="/board" style={{textDecoration: "none"}}>
                    <ListItemTextAndIcon>
                        <FontAwesomeIcon icon={faColumns}/>
                        <span>Board</span>
                    </ListItemTextAndIcon>
                </Link>
                <ListItemTextAndIcon className="menu-disabled">
                    <FontAwesomeIcon icon={faChartLine}/>
                    <span>Reports</span>
                </ListItemTextAndIcon>
                <ListItemTextAndIcon className="menu-disabled">
                    <FontAwesomeIcon icon={faShippingFast}/>
                    <span>Releases</span>
                </ListItemTextAndIcon>
                <ListItemTextAndIcon className="menu-disabled">
                    <FontAwesomeIcon icon={faClone}/>
                    <span>Components</span>
                </ListItemTextAndIcon>
                <ListItemTextAndIcon className="menu-disabled">
                    <FontAwesomeIcon icon={faTasks}/>
                    <span>Issues</span>
                </ListItemTextAndIcon>
                <ListItemTextAndIcon className="menu-disabled">
                    <FontAwesomeIcon icon={faDatabase}/>
                    <span>Repository</span>
                </ListItemTextAndIcon>
                <ListItemTextAndIcon onClick={openCreateDialog}>
                    <FontAwesomeIcon icon={faPlusSquare}/>
                    <span>Add Item</span>
                </ListItemTextAndIcon>
                <ListItemTextAndIcon className="menu-disabled">
                    <FontAwesomeIcon icon={faCog}/>
                    <span>Settings</span>
                </ListItemTextAndIcon>
            </List>
        </JiraSidenav>
    );
}