import React, { Component } from 'react'
import './Header.scss'
import logoImage from '../../../images/logo.png'
import arrow from '../../../images/arrow_down.svg'
class Header extends Component {
    render() {
        return (
            <>
                <div className="container-fluid bg-default border-bottom shadow-sm ">
                    <div className="container ">
                        <div className="row pt-2 pb-2 ">
                            <div className="col-md-2 pl-0">
                                <img src={logoImage} alt="Bostr" className="rounded" />
                            </div>
                            <div className="col-md-10 pr-0">
                                <div className="float-right">
                                    <div className="dropdown">
                                        <button className="dropbtn">Unga och Inne<img className="arrow-icon" src={arrow} alt="Unga och Inne" /></button>
                                        <div className="dropdown-content">
                                            <a href="./">Link 1</a>
                                            <a href="./">Link 2</a>
                                            <a href="./">Link 3</a>
                                        </div>
                                    </div>
                                    <button className="btn btn-md btn-outline-dark rounded-0">Logga in</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                

            </>

        )
    }
}

export default Header
