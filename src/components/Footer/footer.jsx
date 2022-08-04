import './footer.scss';
import { Link } from 'react-router-dom';
import { SocialMedia } from '../SocialMedia';

export function Footer() {
    return (
        <div className="container-fluid footer">
            <div className="container footer-my-container">
                <ul className='footer-my-container-pages-block'>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/portfolio'>Portfolio</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>

                <SocialMedia boostClass={'text-center'} />
            </div>
        </div>
    )
}
