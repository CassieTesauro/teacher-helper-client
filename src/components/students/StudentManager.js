
export const getStudents = () => {
    return fetch("http://localhost:8000/students", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("th_token")}`
        }
    })
        .then(response => response.json())
}

export const createStudent = (student) => {
    return fetch("http://localhost:8000/students", { 
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
    return fetch(`http://localhost:8000/students/${studentId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("th_token")}`
        }
    })
        .then(response => response.json())
}

export const editStudent = (student) => {
    return fetch(`http://localhost:8000/students/${student.id}`, { 
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
    return fetch(`http://localhost:8000/students/${student.id}`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("th_token")}`
        }
    })
        .then(getStudents)
}