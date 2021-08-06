import React from 'react'
import Categories from '../shared/categories/Categories'
import Header from '../shared/header/Header'
import './Home.scss'
import zx9speaker from '../../assets/home/desktop/image-speaker-zx9.png'
import About from '../shared/about-audiophile/About'
import Footer from '../shared/footer/Footer'

function Home() {
    return (
        <div className="home">
            <Header/>
            <section className="first-section">
                <div className="content">
                    <h6>NEW PRODUCT</h6>
                    <h1>XX99 Mark II <br/>HeadphoneS</h1>
                    <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
                    <button>See Product</button>
                </div>
            </section>
            <Categories/>
            <section className="second-section">
                <div className="zx9speaker">
                    <div className="image-container">
                        <img className="speaker" src={zx9speaker} alt="zxç speaker"/>
                    </div>
                    <div className="content">
                        <h2>ZX9<br/>SPEAKER</h2>
                        <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                        <button>See Product</button>
                    </div>
                </div>
                <div className="zx7speaker">
                    <h2>ZX7 SPEAKER</h2>
                    <button>See Product</button>
                </div>
                <div className="earphones">
                    <div className="left"></div>
                    <div className="right">
                        <h2>YX1 EARPHONES</h2>
                        <button>See Product</button>
                    </div>
                </div>
            </section>
            <About/>
            <Footer/>
        </div>
    )
}

export default Home
