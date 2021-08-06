import React from 'react'
import './Footer.scss'
import logo from '../../../assets/shared/desktop/logo.svg'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <div className="footer">
            <div className="line"></div>
            <div className="logoAndNavigation">
                <img className="logo" src={logo} alt="logo"/>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>HEADPHONES</li>
                        <li>SPEAKERS</li>
                        <li>EARPHONES</li>
                    </ul>
                </nav>
            </div>
            <div className="content">
                <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
            </div>
            <div className="copyWriteAndSocialMedia">
                <p>Copyright 2021. All Rights Reserved</p>
                <div className="social-media">
                    <FacebookIcon/>
                    <TwitterIcon/>
                    <InstagramIcon/>
                </div>
            </div>
        </div>
    )
}

export default Footer
