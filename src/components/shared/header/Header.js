import React from 'react'
import './Header.scss'
import logo from '../../../assets/shared/desktop/logo.svg'
import cart from '../../../assets/shared/desktop/icon-cart.svg'
import burger from '../../../assets/shared/tablet/icon-hamburger.svg'
import closeIcon from '../../../assets/shared/tablet/close.svg'

function Header() {

    window.addEventListener('resize', function(){
        if(window.innerWidth > 800){
            document.querySelector('header nav').style.transform = 'translateX(0%)';
        }else{
            document.querySelector('header nav').style.transform = 'translateX(-200%)';
        }
    });

    const openMenu = () =>{
        document.querySelector('header nav').style.transform = 'translateX(0%)';
        document.querySelector('header .bg').style.display = 'block';
    }

    const closeMenu = () =>{
        document.querySelector('header nav').style.transform = 'translateX(-200%)';
        document.querySelector('header .bg').style.display = 'none';
    }

    return (
        <header>
            <div className="logo-conatiner">
                <img src={burger} className="burger-icon" alt={'burger icon'} onClick={openMenu}/>
                <img className="logo" src={logo} alt="logo"/>
            </div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>HEADPHONES</li>
                    <li>SPEAKERS</li>
                    <li>EARPHONES</li>
                </ul>
                <img className="close" src={closeIcon} alt="close icon" onClick={closeMenu}/>
            </nav>
            <img className="cart" src={cart} alt="cart"/>
            <div className="bg" onClick={closeMenu}></div>
        </header>
    )
}

export default Header
