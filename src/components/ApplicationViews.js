import React from "react"
import { Route } from "react-router-dom"
import { LandingPage } from "./LandingPage"



export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <LandingPage />
            </Route>

        </>
    )
}