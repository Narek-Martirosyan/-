import './style.scss';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import InfoIcon from '@mui/icons-material/Info';
import ContactsIcon from '@mui/icons-material/Contacts';

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
                <li><NavLink to='/home'>Home</NavLink></li>
                <li><NavLink to='/portfolio'>Portfolio</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>

            <ul className='mx-auto mobile-bar'>
                <li><NavLink to='/home'><HomeIcon /></NavLink></li>
                <li><NavLink to='/portfolio'><ArticleIcon /></NavLink></li>
                <li><NavLink to='/about'><InfoIcon /></NavLink></li>
                <li><NavLink to='/contact'><ContactsIcon /></NavLink></li>
            </ul>
        </div>
    )
}
