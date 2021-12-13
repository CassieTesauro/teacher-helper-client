import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return(
        <ul className="navbar">
            <li className="navbar__item active one">
                <Link className="navbar__link" to="/">Home</Link>
            </li>
            <li className="navbar__item active two">
                <Link className="navbar__link" to="/students/">Roster</Link> {/* /:userId  AFTER /STUDENTS part of Sunday night test */}
            </li>
            <li className="navbar__item active three">
                <Link className="navbar__link" to="/meetings">Meetings</Link>
            </li>
            <li className="navbar__item active four">
                <Link className="navbar__link" to="#"
                    onClick={
                        () => {
                            localStorage.removeItem("th_user")
                        }
                    }>
                    Logout
                </Link>
            </li>
        </ul>
    )
}