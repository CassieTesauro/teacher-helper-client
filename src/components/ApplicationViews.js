import React from "react"
import { Route } from "react-router-dom"
import { LandingPage } from "./LandingPage"
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

        </>
    )
}