import './style.scss';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
    return (
        <div className="container-fluid footer">
            <div className="container my-container">
                <ul className='footer-pages-block'>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/portfolio'>Portfolio</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
                <div className='social-media text-center pb-5'>
                    <IconButton sx={{ cursor: 'none!important', '&:active': { backgroundColor: '#9b9b9b' } }}>
                        <a style={{ cursor: 'none', display: 'inherit' }} href="#">
                            <FacebookRoundedIcon sx={{ cursor: 'none', color: 'white', '&:hover': { color: 'rgb(138, 137, 137)' }, '&:active': { color: 'blue' } }} />
                        </a>
                    </IconButton>
                    <IconButton sx={{ cursor: 'none!important', '&:active': { backgroundColor: '#9b9b9b' } }}>
                        <a style={{ cursor: 'none', display: 'inherit' }} href="#">
                            <TwitterIcon sx={{ cursor: 'none', color: 'white', '&:hover': { color: 'rgb(138, 137, 137)' }, '&:active': { color: 'blue' } }} />
                        </a>
                    </IconButton>
                    <IconButton sx={{ cursor: 'none!important', '&:active': { backgroundColor: '#9b9b9b' } }}>
                        <a style={{ cursor: 'none', display: 'inherit' }} href="#">
                            <LinkedInIcon sx={{ cursor: 'none', color: 'white', '&:hover': { color: 'rgb(138, 137, 137)' }, '&:active': { color: 'blue' } }} />
                        </a>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}
