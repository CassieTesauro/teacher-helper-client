import React from 'react'
import { ApplicationViews } from "./ApplicationViews.js"
import { Route, Redirect, useLocation } from "react-router-dom"
import { Login } from './auth/Login.js'
import { Register } from './auth/Register.js'
import { NavBar } from "./nav/NavBar.js"

export const TeacherHelper = () => ( 
    <>
        <Route render={() => {
            if (localStorage.getItem("th_token")) {
                return <>
                    <Route>
                        <NavBar />
                        <ApplicationViews />
                    </Route>
                </>
            } else {//bug fix- checking url and excluding login and register so it won't redirect if I'm on register or login
                if(window.location.pathname!="/login" && window.location.pathname!="/register"){
                return <Redirect to="/login"/>}
            }
        }} />

        <Route path="/login" render={Login}/>


        <Route path="/register" render={Register}/>


    </>    
)