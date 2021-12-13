import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { createStudent } from './StudentManager.js'

export const StudentForm = () => {
//STATE VARIABLE FOR NEW STUDENT
    const [currentStudent, setCurrentStudent] = useState({
        name: ""
    })
   
//WILL GET THE UPDATED STUDENT STATE WHEN PATH CHANGES TO ROSTER
    const history = useHistory()   


    /*~~~~~~~INVOKED IN FORM.  USER INPUT GETS STORED ABOVE WITH USESTATE HOOKS ~~~~~~~~~~*/
    const changeStudentPropertyState = (event) => {
        const newStudent = Object.assign({}, currentStudent)
        newStudent[event.target.name] = event.target.value
        setCurrentStudent(newStudent)
    }


/*~~~~~~~FORM STARTS HERE ~~~~~~~~~~*/

    return (
        <>
            <h2 className="form-group">New Student</h2>

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

                <button type="submit"
                onClick={evt => {
                    evt.preventDefault()  //Prevent form from being submitted 

                    const student = {
                        name: currentStudent.name
                    }

                    // Sending POST request to API then rerouting user to studentlist view
                    createStudent(student)
                        .then(() => history.push("/students"))
                }}
                className="btn btn-primary">Add to Roster</button>

            </form>
                
        </>
    )

//save button here


//cancel button here



}//end of StudentForm()
