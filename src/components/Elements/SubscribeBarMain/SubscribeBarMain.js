import React, { Component } from 'react'
import LanguageDropdown from '../LanguageDropdown/LanguageDropdown'
import SubscribeForm from '../SubscribeForm/SubscribeFrom'
import SocialMedia from '../SocialMedia/SocialMedia'

class SubscribeBarMain extends Component {
    render() {
        return (
            <div className="container-fluid mt-4 mb-4">
                <div className="container pl-0 pr-0">
                    <div className="row">
                        <LanguageDropdown />
                        <SubscribeForm />
                        <SocialMedia />
                    </div>
                </div>
            </div>
        )
    }
}

export default SubscribeBarMain
