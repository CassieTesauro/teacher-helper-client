import { getDefaultNormalizer } from "@testing-library/dom"
import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { createMeeting, getSingleMeeting, editMeeting, deleteMeeting, deleteWarning } from './MeetingManager.js'

export const MeetingForm = () => {
    
    const history = useHistory()
    const [students, setStudents] = useState([])
    const [currentMeeting, setCurrentMeeting] = useState({})
    const { meetingId } = useParams()

    /*~~~~~~~CURRENT MEETING DATA POPULATED IN FORM VIEW~~~~~~~~~~*/
    useEffect(() => {
        if (meetingId) {
            getSingleMeeting(meetingId).then((singleMeetingData) => {
                setCurrentMeeting(singleMeetingData)
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
                
               


            </form>

            <button onClick={e => {
            e.preventDefault()
            meetingId ? editMeeting(currentMeeting)
            .then(() => history.push('/meetings')) 
            : createMeeting(currentMeeting)
            .then(() => history.push('/meetings'))}}>Save Meeting</button>
            

            {meetingId ?
                    <button 
                    onClick={e => 
                        {  
                            deleteWarning()
                            if (deleteWarning) {
                                deleteWarning(currentMeeting)
                                .then(() => history.push('/meeting'))
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