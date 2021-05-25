import './BoardHeader.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisH, faSearch} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

export default function BoardHeader({issues}) {
    const [matches, setMatches] = useState([])

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('testing...');
    }

    const findMatches = (e) => {
        let searchTerm = e.target.value.toLowerCase();

        // return no results when search bar is empty
        if (searchTerm === '' || searchTerm === null || searchTerm === undefined){
            setMatches([]);
            return;
        }

        const matchingIssues = [];
        issues.forEach((issue) => {
            //id matches before text matches
            if ((issue.id + "").includes(searchTerm)) {
                matchingIssues.push([
                    issue.id,
                    issue,
                    0
                ]);
            // give a score by position of the match
            } else if (issue.title.toLowerCase().includes(searchTerm)) {
                matchingIssues.push([
                    issue.id,
                    issue,
                    issue.title.toLowerCase().indexOf(searchTerm) + 1
                ]);
            }
        })

        //sort by score
        matchingIssues.sort((a, b) => a[2] - b[2]);

        //get issues from list of ids
        const sortedMatches = [];
        matchingIssues.forEach((match) => sortedMatches.push(match[1]));

        //return list of matches
        setMatches(sortedMatches);
    }

    const navigateToDetails = (id) => {
        //todo: navigate...
        console.log(id);
    }

    return (
        <>
            <div className="board-header">
                <h1>Board</h1>
                <button className="board-release-btn">release</button>
                <FontAwesomeIcon className="board-header-settings" icon={faEllipsisH}/>
            </div>
            <form className="search-form" onSubmit={onSubmit}>
                <input className="search-bar"
                       placeholder="Search"
                       onChange={findMatches}
                />
                <button className="search-btn" type="submit" onClick={onSubmit}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
            {Object.values(matches).map((issue, idx) => (
                <p
                    className="search-match"
                    key={idx}
                    onClick={() => navigateToDetails(issue.id)}
                >
                    RFM-{issue.id} - {issue.title}
                </p>
            ))}
        </>

    );
}