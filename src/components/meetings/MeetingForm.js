import { getDefaultNormalizer } from "@testing-library/dom"
import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { createMeeting, getSingleMeeting, editMeeting, deleteMeeting, deleteWarning } from './MeetingManager.js'
import { getStudents } from "../students/StudentManager.js"

export const MeetingForm = () => {
    
    const history = useHistory()
    const [students, setStudents] = useState([])

    const { meetingId } = useParams()

    /*~~~~~~~CURRENT MEETING DATA POPULATED IN FORM VIEW~~~~~~~~~~*/
    useEffect(() => {
        if (meetingId) {
            getSingleMeeting(meetingId).then((singleMeetingData) => {
                setCurrentMeeting(singleMeetingData)
                const checkForStudent = singleMeetingData.learners.map(learner => {
                    return learner.id})
                setCheckedState(checkForStudent) //now ids are in checked state
              
            })
        }   
    },
        [meetingId])
    

    /*~~~~~~~INVOKED IN FORM.  USER INPUT GETS STORED ABOVE WITH USESTATE HOOKS ~~~~~~~~~~*/

    const changeMeetingPropertyState = (event) => {
        const newMeeting = Object.assign({}, currentMeeting)
        newMeeting[event.target.name] = event.target.value
        setCurrentMeeting(newMeeting)
    }


    //get students
    useEffect(() => {
        getStudents().then(data => setStudents(data))
    }, [])

    //get checked state
    const [checkedState, setCheckedState] = React.useState(
        new Array(students.length).fill(false)
    );

    //for checkboxes 
    const handleOnChange = (position) => {
        const copyOfCheckedState = [
            ...checkedState
        ]
        const valued = parseInt(position.target.value)
        if ( checkedState.includes(valued)) {
            copyOfCheckedState.splice(checkedState.indexOf(valued), 1)
        } else {
            copyOfCheckedState.push(valued)
        }

        setCheckedState(copyOfCheckedState);
    }


    const [currentMeeting, setCurrentMeeting] = useState({
        name: "",
        description: "",
        date: "",
        time: "",
        learners: checkedState   
    })


    /*~~~~~~~FORM STARTS HERE ~~~~~~~~~~*/

    return (
        <>
            <h2 className="form-group">{meetingId ? 'Edit Meeting': 'New Meeting'}</h2>

            <form className="meetingForm newMeetingForm">

                <fieldset>
                    <div className="form-group medium">
                        <label htmlFor="meeting-name">Name: </label>
                        <input type="text" name="name" required autoFocus className="form-control"
                            value={currentMeeting.name}
                            onChange={changeMeetingPropertyState}
                        />
                    </div>
                </fieldset> 

                <fieldset>
                    <div className="form-group large">
                        <label htmlFor="meeting-description">Description: </label>
                        <input type="text" name="description" required autoFocus className="form-control"
                            value={currentMeeting.description}
                            onChange={changeMeetingPropertyState}
                        />
                    </div>
                </fieldset> 

                <fieldset>
                    <div className="form-group small">
                        <label htmlFor="meeting-date">Date: </label>
                        <input type="date" name="date" required autoFocus className="form-control"
                            value={currentMeeting.date}
                            onChange={changeMeetingPropertyState}
                        />
                    </div>
                </fieldset> 

                <fieldset>
                    <div className="form-group small">
                        <label htmlFor="meeting-time">Time: </label>
                        <input type="time" name="time" required autoFocus className="form-control"
                            value={currentMeeting.time}
                            onChange={changeMeetingPropertyState}
                        />
                    </div>
                </fieldset> 

                <h3>Participating Students:</h3>
                        <ul className="participants-list">
                            {students.map(({ name, id }, index) => {
                                return (
                                    <li key={index}>
                                        <div className="participants-list-item">
                                            <div className="left-section">
                                                <input
                                                    checked = {checkedState.includes(id)} //includes return t/f so no ternary necessary
                                                    type="checkbox"
                                                    id={`custom-checkbox-${index}`}
                                                    name={name}
                                                    value={id}
                                                    onChange={(event) => handleOnChange(event)}
                                                />
                                                <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>

            </form>

            <button onClick={e => {
            e.preventDefault()
            //add the checked state to current meeting here
            const completeMeetingData = {
                ...currentMeeting,
                learners: checkedState
            }
            meetingId ? editMeeting(completeMeetingData)
            .then(() => history.push('/meetings')) 
            : createMeeting(completeMeetingData)
            .then(() => history.push('/meetings'))}}>Save Meeting</button>
            

            {meetingId ?
                    <button 
                    onClick={e => 
                        {  
                            deleteWarning()
                            if (deleteWarning) {
                                deleteMeeting(currentMeeting)
                                .then(() => history.push('/meetings'))
                            }
                           
                        }
                    }
                    >Delete Meeting </button> : ""
            }


            <button onClick={evt => {
                    evt.preventDefault()
                    history.push("/meetings")}
                } 
                className="btn btn-cancel delete-meeting">Back to Meetings List</button>
                
        </>
    )
   
}//end of MeetingForm()