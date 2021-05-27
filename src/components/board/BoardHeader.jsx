import './BoardHeader.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisH} from "@fortawesome/free-solid-svg-icons";
import {FAIconButton, TextButton} from "../../styles/styles";
import SearchBar from "./SearchBar";

export default function BoardHeader({issues}) {
    return (
        <>
            <section className="board-header">
                <h1>Board</h1>
                <TextButton style={{marginLeft: "auto"}}>release</TextButton>
                <FAIconButton>
                    <FontAwesomeIcon icon={faEllipsisH}/>
                </FAIconButton>
            </section>
            <SearchBar issues={issues}/>
        </>

    );
}