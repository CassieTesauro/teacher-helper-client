import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { createStudent, getSingleStudent, editStudent, deleteStudent, deleteWarning } from './StudentManager.js'

export const StudentForm = () => {
    
    const [currentStudent, setCurrentStudent] = useState({
        name: ""
    })
   
    const history = useHistory()   

     /*~~~~~~~CURRENT STUDENT DATA POPULATED IN FORM VIEW~~~~~~~~~~*/
    const { studentId } = useParams()
    
    useEffect(() => {
        if (studentId) {
            getSingleStudent(studentId).then((singleStudentData) => {
                setCurrentStudent(singleStudentData)
            }
            )
        }
    },
        [studentId])

    


    /*~~~~~~~INVOKED IN FORM.  USER INPUT GETS STORED ABOVE WITH USESTATE HOOKS ~~~~~~~~~~*/

    const changeStudentPropertyState = (event) => {
        const newStudent = Object.assign({}, currentStudent)
        newStudent[event.target.name] = event.target.value
        setCurrentStudent(newStudent)
    }




/*~~~~~~~FORM STARTS HERE ~~~~~~~~~~*/

    return (
        <>
            <h2 className="form-group">{studentId ? 'Edit Student': 'New Student'}</h2>

            <form className="studentForm newStudentForm">

                <fieldset>
                    <div className="form-group medium">
                        <label htmlFor="student-name">Name: </label>
                        <input type="text" name="name" required autoFocus className="form-control"
                            value={currentStudent.name}
                            onChange={changeStudentPropertyState}
                        />
                    </div>
                </fieldset>
                
               


            </form>

            <button onClick={e => {
            e.preventDefault()
            studentId ? editStudent(currentStudent)
            .then(() => history.push('/students')) 
            : createStudent(currentStudent)
            .then(() => history.push('/students'))}}>Save Student</button>
            

            {studentId ?
                    <button 
                    onClick={e => 
                        {  
                            deleteWarning()
                            if (deleteWarning) {
                                deleteStudent(currentStudent)
                                .then(() => history.push('/students'))
                            }
                           
                        }
                    }
                    >Delete Student </button> : ""
            }


            <button onClick={evt => {
                    evt.preventDefault()
                    history.push("/students")}
                } 
                className="btn btn-cancel delete-student">Back to Roster</button>
                
        </>
    )


            





}//end of StudentForm()
