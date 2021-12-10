
// import React, { useEffect, useState } from "react"
// import { getStudents } from "./StudentManager.js"
// import { useHistory } from "react-router-dom"

// export const StudentList = (props) => {
//     const history = useHistory()
//     const [ students, setStudents ] = useState([])

//     useEffect(() => {
//         getStudents().then(data => setStudents(data))
//     }, [])

//     return (
//         <>
//             <h1 className="roster__heading">Roster</h1>
//             <div className="roster__box">
//             <h3 className="roster__subheading">Click on a student to edit or delete.</h3>

//             <div className="roster__inner__box"></div>

//         </>



//     ) //end of return
// } //end of studentlist function