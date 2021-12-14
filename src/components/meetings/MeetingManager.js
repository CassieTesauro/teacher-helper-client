export const getMeetings = () => {
    return fetch("http://localhost:8000/meetings", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("th_token")}`
        }
    })
        .then(response => response.json())
}

export const createMeeting = (meeting) => {
    return fetch("http://localhost:8000/meetings", { 
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("th_token")}`,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(meeting)
    })
        .then(getMeetings)
}

export const getSingleMeeting = (meetingId) => {
    return fetch(`http://localhost:8000/meetings/${meetingId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("th_token")}`
        }
    })
        .then(response => response.json())
}

export const editMeeting = (meeting) => {
    return fetch(`http://localhost:8000/meetings/${meeting.id}`, { 
        method: "PUT",
        headers:{
            "Authorization": `Token ${localStorage.getItem("th_token")}`,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(meeting)
    })
        .then(getMeetings)
}


export const deleteMeeting = (meeting) => {
    return fetch(`http://localhost:8000/meetings/${meeting.id}`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("th_token")}`
        }
    })
        .then(getMeetings)
}

export const deleteWarning = () => {
    window.confirm("Delete Meeting?\nThis cannot be undone.")
}