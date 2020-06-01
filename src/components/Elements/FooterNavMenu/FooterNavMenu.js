import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class FooterNavMenu extends Component {
    render() {
        return (
            <Router>
                <div className="col-8 pr-0 pl-0">
                    <div className="row">
                        <div className="col text-white d-flex flex-column">
                            <h5 className="text-white p-2">Bostr</h5>
                            <Link className="text-white p-2" to='/'>About us</Link>
                            <Link className="text-white p-2" to='/'>Career</Link>
                            <Link className="text-white p-2" to='/'>Press</Link>
                            <Link className="text-white p-2" to='/'>Contact</Link>
                        </div>
                        <div className="col text-white d-flex flex-column">
                            <h5 className="text-white p-2">Discover</h5>
                            <Link className="text-white p-2" to='/'>Privacy & Policy</Link>
                            <Link className="text-white p-2" to='/'>Security</Link>
                        </div>
                        <div className="col text-white d-flex flex-column">
                            <h5 className="text-white p-2">Account</h5>
                            <Link className="text-white p-2" to='/'>Log in</Link>
                            <Link className="text-white p-2" to='/'>Create Account</Link>
                        </div>

                        <Switch>
                            <Route path="/about">
                            </Route>
                            <Route path="/topics">
                            </Route>
                            <Route path="/">
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

export default FooterNavMenu
