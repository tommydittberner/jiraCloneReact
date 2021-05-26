import './MenuBar.scss';
import {faMoon, faPlus, faQuestionCircle, faSearch, faSun} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faJira} from "@fortawesome/free-brands-svg-icons";
import {FAIconButtonMenu, Header, JiraMenu} from "../styles/styles";

export default function MenuBar({openCreateDialog, theme, toggleTheme}) {

    return (
        <JiraMenu>
            <Header>
                <FAIconButtonMenu>
                    <FontAwesomeIcon
                        icon={faJira}
                        size="2x"
                    />
                </FAIconButtonMenu>
            </Header>
            <section className="menu-bar-btn-container">
                <FAIconButtonMenu>
                    <FontAwesomeIcon
                        icon={faSearch}
                        size="lg"
                    />
                </FAIconButtonMenu>
                <FAIconButtonMenu>
                    <FontAwesomeIcon
                        icon={faPlus}
                        size="lg"
                        onClick={openCreateDialog}
                    />
                </FAIconButtonMenu>
                <FAIconButtonMenu>
                    <FontAwesomeIcon
                        icon={theme === 'light' ? faMoon : faSun}
                        size="lg"
                        onClick={toggleTheme}
                    />
                </FAIconButtonMenu>
                <FAIconButtonMenu className="menu-bar-bottom-button">
                    <FontAwesomeIcon
                        icon={faQuestionCircle}
                        size="lg"
                    />
                </FAIconButtonMenu>
            </section>
        </JiraMenu>
    );
}