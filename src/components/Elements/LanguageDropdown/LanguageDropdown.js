import React, { Component } from 'react'
import arrow from '../../../images/arrow_down.svg'

class LanguageDropdown extends Component {
    render() {
        return (
            <div className="col-3 pl-0 pr-0">
                <div className="dropdown">
                    <button className="dropbtn">Swedish<img className="arrow-icon ml-4" src={arrow} alt="Language" /></button>
                    <div className="dropdown-content">
                        <a href="./">Spanish</a>
                        <a href="./">English</a>
                        <a href="./">Danish</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default LanguageDropdown
