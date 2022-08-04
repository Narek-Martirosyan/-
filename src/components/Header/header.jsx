import './header.scss';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import InfoIcon from '@mui/icons-material/Info';
import ContactsIcon from '@mui/icons-material/Contacts';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import UndoIcon from '@mui/icons-material/Undo';
import { useDispatch } from 'react-redux';
import {
    changeArticlesPathname,
    changeContactPathname,
    changeMainPathname,
    changePortfolioPathname
} from '../../features/followPathname/followPathnameSlice';

export const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [navbar, setNavbar] = useState('nav navbar my-navbar');
    const [back, setBack] = useState('go-back');
    const [contactPage, setContactPage] = useState('');
    const dispatch = useDispatch();
    const goBackURLs = [
        '/portfolio/todo',
        '/portfolio/tictactoe',
        '/portfolio/memorygame',
        '/articles/fixedbrokentodo'
    ];

    window.addEventListener('scroll', function (e) {
        if (this.scrollY > 10) {
            setNavbar('nav navbar my-navbar box-shadow');
        } else {
            setNavbar('nav navbar my-navbar');
        }
    });

    useEffect(() => {
        if (goBackURLs.includes(location.pathname)) {
            setBack('go-back show');
            setContactPage('contact-page');
        } else {
            setBack('go-back');
            setContactPage('');
        }
        if (location.pathname === '/home/' || location.pathname === '/home') {
            dispatch(changeMainPathname(location.pathname));
        }
        if (location.pathname === '/contact') {
            dispatch(changeContactPathname(location.pathname));
        }
        if (location.pathname === '/portfolio') {
            dispatch(changePortfolioPathname(location.pathname));
        }
        if (location.pathname === '/articles') {
            dispatch(changeArticlesPathname(location.pathname));
        }

        // eslint-disable-next-line
    }, [location]);

    return (
        <div className={navbar}>
            <ul className='my-navbar-pages-block mx-auto'>
                <li><NavLink to='/home'>Home</NavLink></li>
                <li><NavLink to='/portfolio'>Portfolio</NavLink></li>
                <li><NavLink to='/articles'>Articles</NavLink></li>
                <li><NavLink to='/contact' className={contactPage}>Contact</NavLink></li>
            </ul>

            <Button
                className={back}
                variant="outline-primary"
                title='Go back'
                onClick={() => navigate(-1)}
            > <UndoIcon /></Button>

            <ul className='mx-auto my-navbar-mobile-bar'>
                <li><NavLink to='/home'><HomeIcon /></NavLink></li>
                <li><NavLink to='/portfolio'><ArticleIcon /></NavLink></li>
                <li><NavLink to='/articles'><InfoIcon /></NavLink></li>
                <li><NavLink to='/contact'><ContactsIcon /></NavLink></li>
            </ul>
        </div>
    )
}
