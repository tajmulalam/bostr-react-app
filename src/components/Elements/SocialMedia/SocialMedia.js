import React, { Component } from 'react'
import instagramIcon from '../../../images/instagram.png'
import twitterIcon from '../../../images/twitter.png'
import facebookIcon from '../../../images/facebook.png'

class SocialMedia extends Component {
    render() {
        return (
            <div className="col-3 pl-0 pr-0">
                <div className="d-flex flex-row float-right">
                    <img className="mr-4 p-2 align-self-center" src={instagramIcon} alt="instagram" width="40"/>
                    <img className="mr-4 p-2 align-self-center" src={twitterIcon} alt="instagram"  width="40"/>
                    <img className="mr-2 p-2 align-self-center" src={facebookIcon} alt="instagram"  width="40"/>
                </div>
            </div>
        )
    }
}

export default SocialMedia
