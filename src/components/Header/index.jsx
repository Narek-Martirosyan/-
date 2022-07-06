import './style.scss';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
    const [navbar, setNavbar] = useState('nav navbar my-navbar');
    window.addEventListener('scroll', function (e) {
        if (this.scrollY > 10) {
            setNavbar('nav navbar my-navbar box-shadow');
        } else {
            setNavbar('nav navbar my-navbar');
        }
    })

    return (
        <div className={navbar}>
            <ul className='pages-block mx-auto'>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/portfolio'>Portfolio</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </div>
    )
}
