import './style.scss';
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
import { changePathname } from '../../features/homePage/homePageSlice';

export default function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const [navbar, setNavbar] = useState('nav navbar my-navbar');
    const [back, setBack] = useState('go-back');
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
            setBack('go-back show')
        } else {
            setBack('go-back')
        }
        if (location.pathname !== '/home') {
            dispatch(changePathname(location.pathname));
        }
    }, [location]);
    return (
        <div className={navbar}>
            <ul className='pages-block mx-auto'>
                <li><NavLink to='/home'>Home</NavLink></li>
                <li><NavLink to='/portfolio'>Portfolio</NavLink></li>
                <li><NavLink to='/articles'>Articles</NavLink></li>
                <li><NavLink to='/contact' className={'contact-page'}>Contact</NavLink></li>
            </ul>

            <Button
                className={back}
                variant="outline-primary"
                title='Go back'
                onClick={() => navigate(-1)}
            > <UndoIcon /></Button>

            <ul className='mx-auto mobile-bar'>
                <li><NavLink to='/home'><HomeIcon /></NavLink></li>
                <li><NavLink to='/portfolio'><ArticleIcon /></NavLink></li>
                <li><NavLink to='/about'><InfoIcon /></NavLink></li>
                <li><NavLink to='/contact'><ContactsIcon /></NavLink></li>
            </ul>
        </div>
    )
}
