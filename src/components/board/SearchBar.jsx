import {SearchButton, SearchMatch, StyledSearchBar} from "../../styles/styles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {useHistory} from "react-router-dom";
import {useState} from "react";

export default function SearchBar({issues}) {
    const history = useHistory();
    const [matches, setMatches] = useState([]);
    const [query, setQuery] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        //directly navigate on submit if there is only a single matching issue available
        matches.length === 1 && navigateToDetails(matches[0]);
    }

    const navigateToDetails = (issue) => {
        history.push({
            pathname: `issues/${issue.id}`,
            state: issue,
        });
    }

    const findMatches = (e) => {
        let searchTerm = e.target.value.toLowerCase();

        if (!searchTerm) {
            setMatches([]);
            return;
        }

        setQuery(searchTerm);

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

        setMatches(sortedMatches);
    }

    //this is buggy and probably redundant - but it was fun
    function highlightMatchingText(id, title) {
        let str = `${id} - ${title}`.toLowerCase();
        let splitStr = str.split(query);
        return (
            <>
                <span>{splitStr[0]}</span>
                <span style={{fontWeight: 'bold'}}>{query}</span>
                <span>{splitStr[1]}</span>
            </>
        )
    }

    return (
        <>
            <form style={{display: "inline"}} onSubmit={onSubmit}>
                <StyledSearchBar placeholder="Search" onChange={findMatches}/>
                <SearchButton type="submit" onClick={onSubmit}>
                    <FontAwesomeIcon icon={faSearch}/>
                </SearchButton>
            </form>
            {Object.values(matches).map((issue, idx) => (
                <SearchMatch
                    key={idx}
                    onClick={() => navigateToDetails(issue)}
                >
                    {highlightMatchingText(issue.id, issue.title)}
                </SearchMatch>
            ))}
        </>
    );
}