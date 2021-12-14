import React, { useEffect, useState } from "react"
import { getMeetings } from "./MeetingManager.js"  
import { useHistory, Link } from "react-router-dom"             

export const MeetingList = () => {    
    const history = useHistory()
    const [ meetings, setMeetings ] = useState([])

    useEffect(() => {
        getMeetings().then(data => setMeetings(data))
    }, [])

    return(
        <>
            <h1 className="roster__heading">Meetings</h1>
            <div className="roster__box">
            <h3 className="roster__subheading">Click on a meeting to edit or delete.</h3>


            <button className="btn btn-create"
                onClick={() => {
                    history.push({ pathname: "/meetings/new" })
            }}
            >Add New Meeting</button>


            <div className="roster__inner__box">
            {   meetings ? 
                meetings.map(
                    (meetingObject) => {
                            return <h4 className="meetings__title" key={`meeting--${meetingObject.id}`}><Link to={`/meetings/${meetingObject.id}`}>{meetingObject.name}</Link></h4> 
  
                    }
                ) :  <h4 key={`meeting--`}> Click the button to add a meeting.</h4>
            } 
    
            </div> {/*end roster__inner__box div*/}
            </div> {/*end roster__box div*/}
        </>

    )//end of return with jsx meeting list

}//end of MeetingList()
