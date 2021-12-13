
import React, { useEffect, useState } from "react"
import { getStudents } from "./StudentManager.js"  
import { useHistory, Link } from "react-router-dom"             

export const StudentList = () => {    
    const history = useHistory()
    const [ students, setStudents ] = useState([])

    useEffect(() => {
        getStudents().then(data => setStudents(data))
    }, [])



    return (
        <>
            <h1 className="roster__heading">Roster</h1>
            <div className="roster__box">
            <h3 className="roster__subheading">Click on a student to edit or delete.</h3>


            <button className="btn btn-create"
                onClick={() => {
                    history.push({ pathname: "/students/new" })
            }}
            >Add New Student</button>


            <div className="roster__inner__box">
            {   students ? 
                students.map(
                    (studentObject) => {
                            return <h4 className="roster__name" key={`student--${studentObject.id}`}><Link to={`/students/${studentObject.id}`}>{studentObject.name}</Link></h4> 
  
                    }
                ) :  <h4 key={`student--`}> Click the button to add students to your roster.</h4>
            } 
    
            </div> {/*end roster__inner__box div*/}
            </div> {/*end roster__box div*/}

        </>
    ) //end return with jsx student list
} //end StudentList()