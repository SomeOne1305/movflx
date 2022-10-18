import React from 'react'
import "./navigation.css"

export default function Navigation() {
    return (
        <nav>
            <div className="logo">
                <img src="https://themehut.co/wp/movflx/wp-content/themes/movflx/assets/img/logo/logo.png" alt="" />
            </div>
            <div className="navbar">
                <ul>
                    <li>
                        <a href="#">Header</a>
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
                    <li>
                        <a href="#">Header</a>
                    </li>
                </ul>
            </div>
            <div className="extSettings">
                <div className="changeLanguage">
                    <i className="fa-light fa-globe"></i>
                    <select name="language" id="language">
                        <option value="ru-Ru">Ru</option>
                        <option value="en-US">Eng</option>
                    </select>
                </div>
                <div className="darkMode"></div>
                <button className="SignIn">Sign In</button>
            </div>
        </nav>
    )
}
