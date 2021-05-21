import {STATUS_TYPES} from "../util/contants";

export const fetchIssues = async () => {
    return await fetch('http://localhost:8080/api/issue', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
    }).then(res => res.json())
}

export const addNewIssue = async (issue) => {
    return await fetch('http://localhost:8080/api/issue', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            "title": issue.title,
            "description" : issue.description,
            "status" : STATUS_TYPES.OPEN,
            "type": issue.issueType,
            "priority": issue.issuePriority,
            "storypoints": issue.storypoints,
        })
    }).then(res => res.json())
}

export const updateIssue = async (id, values) => {
    let requestParams = "";
    Object.entries(values).map(([k, v], idx) => {
        return idx === 0 ?
            requestParams += "?" + k + "=" + v :
            requestParams += "&" + k + "=" + v;
    });

    let url = `http://localhost:8080/api/issue/${id}${requestParams}`;
    return await fetch(url, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
    }).then(res => res.json())
}