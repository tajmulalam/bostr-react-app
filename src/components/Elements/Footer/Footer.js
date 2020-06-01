import React, { Component } from 'react'
import SubscribeBarMain from '../SubscribeBarMain/SubscribeBarMain'
import FooterNavMenu from '../FooterNavMenu/FooterNavMenu'
import './Footer.scss'
import BostrLogo from '../BostrLogo/BostrLogo'
import footerBg from '../../../images/footer_bg.png'

class Footer extends Component {
    render() {
        return (
            <>
                <SubscribeBarMain />
                <footer className="navbar bg-footer">
                    <div className="container pl-0 pr-0 mt-4">
                        <div className="row w-100">
                            <BostrLogo />
                            <FooterNavMenu />
                        </div>

                    </div>
                    <img src={footerBg} alt="building" className="img-fluid w-100" />
                    <p className="text-center w-100 text-white p-2">&copy;2020 &sdot; bostr.se</p>
                </footer>
            </>
        )
    }
}

export default Footer
