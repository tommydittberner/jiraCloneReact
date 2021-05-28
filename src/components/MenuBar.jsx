import './MenuBar.scss';
import {faMoon, faPlus, faQuestionCircle, faSearch, faSun} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faJira} from "@fortawesome/free-brands-svg-icons";
import {IconButtonMenu, Header, JiraMenu} from "../styles/styles";

export default function MenuBar({openCreateDialog, theme, toggleTheme}) {
    return (
        <JiraMenu>
            <Header>
                <IconButtonMenu>
                    <FontAwesomeIcon
                        icon={faJira}
                        size="2x"
                    />
                </IconButtonMenu>
            </Header>
            <section className="menu-bar-btn-container">
                <IconButtonMenu>
                    <FontAwesomeIcon
                        icon={faSearch}
                        size="lg"
                    />
                </IconButtonMenu>
                <IconButtonMenu>
                    <FontAwesomeIcon
                        icon={faPlus}
                        size="lg"
                        onClick={openCreateDialog}
                    />
                </IconButtonMenu>
                <IconButtonMenu>
                    <FontAwesomeIcon
                        icon={theme === 'light' ? faMoon : faSun}
                        size="lg"
                        onClick={toggleTheme}
                    />
                </IconButtonMenu>
                <IconButtonMenu className="menu-bar-bottom-button">
                    <FontAwesomeIcon
                        icon={faQuestionCircle}
                        size="lg"
                    />
                </IconButtonMenu>
            </section>
        </JiraMenu>
    );
}