import {STATUS_TYPES} from "../util/contants";


const uriBase = 'http://localhost:8080/api/issue';
const headers = {
    'Accept': 'application/json',
    'Content-type': 'application/json'
};

export const fetchIssues = async () => {
    return await fetch(uriBase, {
        method: 'GET',
        headers: headers,
    }).then(res => res.json());
}

export const addNewIssue = async (issue) => {
    return await fetch(uriBase, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            "title": issue.title,
            "description" : issue.description,
            "status" : STATUS_TYPES.OPEN,
            "type": issue.issueType,
            "priority": issue.issuePriority,
            "storypoints": issue.storypoints,
        })
    }).then(res => res.json());
}

export const doUpdateIssue = async (id, values) => {
    let requestParams = "";
    Object.entries(values).map(([k, v], idx) => {
        return idx === 0 ?
            requestParams += "?" + k + "=" + v :
            requestParams += "&" + k + "=" + v;
    });

    let url = `${uriBase}/${id}${requestParams}`;
    return await fetch(url, {
        method: 'PUT',
        headers: headers,
    }).then(res => res.json());
}

export const doDeleteIssue = async (id) => {
    return await fetch(`${uriBase}/${id}`, {
        method: 'DELETE',
        headers: headers
    }) //void response
}