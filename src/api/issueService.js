import {STATUS_TYPES} from "../util/contants";


const baseUrl = 'http://localhost:8080/api/issue';
const headers = {
    'Accept': 'application/json',
    'Content-type': 'application/json'
};

export const fetchIssues = async () => {
    return await fetch(baseUrl, {
        method: 'GET',
        headers: headers,
    }).then(res => res.json());
}

export const addNewIssue = async (issue) => {
    return await fetch(baseUrl, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            "title": issue.title,
            "description": issue.description,
            "status": STATUS_TYPES.OPEN, // default status
            "type": issue.issueType,
            "priority": issue.issuePriority,
            "storypoints": issue.storypoints,
        })
    }).then(res => res.json());
}

export const updateBoard = async (id, source, dest) => {
    return await fetch(baseUrl, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify({
            "issueId": id,
            "sourceCol": source.droppableId,
            "sourceIdx": source.index,
            "destCol": dest.droppableId,
            "destIdx": dest.index,
        })
    }).then(res => res.json());
}

export const doUpdateIssue = async (id, values) => {
    return await fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify({
            "title": values.title,
            "description": values.description,
            "type": values.issueType,
            "priority": values.issuePriority,
            "storypoints": values.storypoints,
        })
    }).then(res => res.json());
}

export const doDeleteIssue = async (id) => {
    return await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
        headers: headers
    }) 
}