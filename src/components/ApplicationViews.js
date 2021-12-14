import React from "react"
import { Route } from "react-router-dom"
import { LandingPage } from "./LandingPage"
import { MeetingList } from "./meetings/MeetingList"
import { MeetingForm } from "./meetings/MeetingForm"
import { StudentForm } from "./students/StudentForm"
import { StudentList } from "./students/StudentList"



export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <LandingPage />
            </Route>
            <Route exact path="/students">
                <StudentList />
            </Route>
            <Route exact path="/students/new">
                <StudentForm />
            </Route>
            <Route exact path="/students/:studentId(\d+)">
                <StudentForm />
            </Route>
            <Route exact path="/meetings">
                <MeetingList />
            </Route>
            <Route exact path="/meetings/new">
                <MeetingForm />
            </Route>
            <Route exact path="/meetings/:meetingId(\d+)">
                <MeetingForm />
            </Route>

        </>
    )
}