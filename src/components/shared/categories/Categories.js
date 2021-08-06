import React from 'react'
import './Categories.scss'
import headphones from '../../../assets/shared/desktop/image-headphones.png'
import speakers from '../../../assets/shared/desktop/image-speakers.png'
import earphones from '../../../assets/shared/desktop/image-earphones.png'
import arrow from '../../../assets/shared/desktop/icon-arrow-right.svg'

function Categories() {
    return (
        <div className="categories">
            <div className="headphones category">
                <img className="category-image" src={headphones} alt="headphones"/>
                <h4>HEADPHONES</h4>
                <div>
                    <p>SHOP</p>
                    <img src={arrow} alt="arrow"/>
                </div>
            </div>
            <div className="speakers category">
                <img className="category-image" src={speakers} alt="speakers"/>
                <h4>SPEAKERS</h4>
                <div>
                    <p>SHOP</p>
                    <img src={arrow} alt="arrow"/>
                </div>
            </div>
            <div className="earphones category">
                <img className="category-image" src={earphones} alt="earphones"/>
                <h4>EARPHONES</h4>
                <div>
                    <p>SHOP</p>
                    <img src={arrow} alt="arrow"/>
                </div>
            </div>
        </div>
    )
}

export default Categories
