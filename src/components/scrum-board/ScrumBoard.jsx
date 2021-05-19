import StatusColumn from "./StatusColumn";
import {STATUS_TYPES} from "../../util/contants";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisH} from "@fortawesome/free-solid-svg-icons";
import {useState, useEffect} from 'react';
import axios from "axios";

export default function ScrumBoard() {
    const [issues, setIssues] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            axios('http://localhost:8080/api/issue').then((res) => {
                console.log(res.data);
                setIssues(res.data)
            });
        };
        fetchData();
    }, []);

    return(
        <>
            <div className="board-header">
                <h1>Board</h1>
                <button className="release-btn">release</button>
                <FontAwesomeIcon className="board-header-settings" icon={faEllipsisH} />
            </div>
            <div className="scrum-board">
                <StatusColumn name={STATUS_TYPES.OPEN}
                              issues={issues.filter((i) => i.status === STATUS_TYPES.OPEN)}
                />
                <StatusColumn name={STATUS_TYPES.IN_PROGRESS}
                              issues={issues.filter((i) => i.status === STATUS_TYPES.IN_PROGRESS)}
                />
                <StatusColumn name={STATUS_TYPES.PEER_REVIEW}
                              issues={issues.filter((i) => i.status === STATUS_TYPES.PEER_REVIEW)}
                />
                <StatusColumn name={STATUS_TYPES.DONE}
                              issues={issues.filter((i) => i.status === STATUS_TYPES.DONE)}
                />
            </div>
        </>
    );
}