import React, { Component } from 'react'
import bostrFooterLogo from '../../../images/bostr_footer_logo.png'
class BostrLogo extends Component {
    render() {
        return (
            <div className="col-2 pr-0 pl-0">
                <img src={bostrFooterLogo} alt="Bostr" className="rounded"/>
            </div>
        )
    }
}

export default BostrLogo
