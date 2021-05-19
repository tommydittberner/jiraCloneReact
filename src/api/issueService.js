export const fetchIssues = async () => {
    return await fetch('http://localhost:8080/api/issue', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
    }).then(res => res.json())
}