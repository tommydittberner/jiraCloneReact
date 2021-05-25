import './BoardHeader.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisH, faSearch} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {useHistory} from "react-router-dom";

export default function BoardHeader({issues}) {
    const history = useHistory();
    const [matches, setMatches] = useState([]);
    const [query, setQuery] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        //we can navigate on submit if there is a single matching issue available
        if(matches.length === 1){
            history.push({
                pathname: `issues/${matches[0].id}`,
                state: matches[0],
            });
        }
    }

    const findMatches = (e) => {
        let searchTerm = e.target.value.toLowerCase();
        setQuery(searchTerm);

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
        matchingIssues.sort((a, b) => {
            //same score -> sort asc by id
            if (a[2] - b[2] === 0) {
                return a[0] - b[0];
            }
            return a[2] - b[2];
        });

        //get issues from list of ids
        const sortedMatches = [];
        matchingIssues.forEach((match) => sortedMatches.push(match[1]));

        //return list of matches
        setMatches(sortedMatches);
    }

    const navigateToDetails = (issue) => {
        history.push({
            pathname: `issues/${issue.id}`,
            state: issue,
        });
    }

    //this is buggy and probably redundant - but it was fun
    function highlightMatchingText(id, title) {
        let str = `${id} - ${title}`.toLowerCase();
        let splitStr= str.split(query);
        return(
            <>
                <span>{splitStr[0]}</span>
                <span style={{fontWeight: 'bold'}}>{query}</span>
                <span>{splitStr[1]}</span>
            </>

        )
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
                <button
                    key={idx}
                    className="search-match"
                    onClick={() => navigateToDetails(issue)}
                >
                    {highlightMatchingText(issue.id, issue.title)}
                </button>
            ))}
        </>

    );
}