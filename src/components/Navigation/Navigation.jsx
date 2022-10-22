import React from 'react'
import "./navigation.css"
import { changeLanguage } from '../../context'

export default function Navigation() {
    const [, setValue] = React.useContext(changeLanguage)
    
    function getLanguage(e){
        setValue(e.target.value)  
        localStorage.setItem("Language", e.target.value)
        console.log(e.target);  
    }
    
    return (
        <nav style={{position: "fixed", top:0, left: 0}}>
            <div className="container">
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
                    <select onChange={(e)=> getLanguage(e)} defaultValue={localStorage.getItem('selLang')} name="language" id="language">
                        <option  >{localStorage.getItem('selLang')}</option>
                        <option value="en-US">Eng</option>
                        <option value="ru-RU">Rus</option>
                    </select>
                </div>
                <div className="darkMode"></div>
                <button className="SignIn">Sign In</button>
            </div>
            </div>
        </nav>
    )
}
