
export const getStudents = () => {
    return fetch("https://teacher-helper-server.herokuapp.com/students", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("th_token")}`
        }
    })
        .then(response => response.json())
}

export const createStudent = (student) => {
    return fetch("https://teacher-helper-server.herokuapp.com/students", { 
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("th_token")}`,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(student)
    })
        .then(getStudents)
}

export const getSingleStudent = (studentId) => {
    return fetch(`https://teacher-helper-server.herokuapp.com/students/${studentId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("th_token")}`
        }
    })
        .then(response => response.json())
}

export const editStudent = (student) => {
    return fetch(`https://teacher-helper-server.herokuapp.com/students/${student.id}`, { 
        method: "PUT",
        headers:{
            "Authorization": `Token ${localStorage.getItem("th_token")}`,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(student)
    })
        .then(getStudents)
}


export const deleteStudent = (student) => {
    return fetch(`https://teacher-helper-server.herokuapp.com/students/${student.id}`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("th_token")}`
        }
    })
        .then(getStudents)
}

export const deleteWarning = () => {
    window.confirm("Delete Student?\nThis cannot be undone.")
}