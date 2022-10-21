import React, { createContext } from 'react'
import "./navigation.css"

export default function Navigation() {
    const [value, setValue] = React.useState("")
    function getValue(e) {
       setValue(e.target.value)
    }
    console.log(value);
    const lang = React.createContext(value)
    return (
        <nav>
            <div className="logo">
                <img src="https://themehut.co/wp/movflx/wp-content/themes/movflx/assets/img/logo/logo.png" alt="" />
            </div>
            <div className="navbar">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#upcoming">Upcoming</a>
                    </li>
                    <li>
                        <a href="#">Header</a>
                    </li>
                    <li>
                        <a href="#">Header</a>
                    </li>
                    <li>
                        <a href="#">Header</a>
                    </li>
                </ul>
            </div>
            <div className="extSettings">
                <div className="changeLanguage">
                    <i className="fa-light fa-globe"></i>
                    <select name="language" id="language">
                        <option onClick={e=> getValue(e)} value="en-US">Eng</option>
                        <option onClick={e=> getValue(e)} value="ru-RU">Ru</option>
                    </select>
                </div>
                <div className="darkMode"></div>
                <button className="SignIn">Sign In</button>
            </div>
        </nav>
    )
}
