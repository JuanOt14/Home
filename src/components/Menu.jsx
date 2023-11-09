import './Menu.css'
import { useState } from 'react';
import Logo from '../assets/Otech-logo-lg.svg';

function Menu () {
    const [isActive, setActive] = useState(true);
    var btnClassName = isActive ? 'menuButton-active' : 'menuButton';
    var menuClassName = isActive ? 'menu active' : 'menu';
    var btnContent = isActive ? '<' : '>';

    const changeState = () => {
        setActive(!isActive);
    }

    return(
        <div className={menuClassName}>
            <button className={btnClassName} onClick={changeState}><b>{btnContent}</b></button>
            <h1>Portfolio</h1>
            <a href="/">
                <div className='menuItem'>Resume</div>
            </a>
            <a href="/restaurant">
                <div className='menuItem'>Restaurant</div>
            </a>
            <a href="/weatherapp">
                <div className='menuItem'>Weather App</div>
            </a>
            <img alt='Logo Image' src={Logo}/>
        </div>
    );
}

export default Menu;