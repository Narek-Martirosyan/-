import { TypeAnimationComp } from '../../components/TypeAnimation';
import './home.scss';
import myImage from './img/myPic.png';
import { useState } from "react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useSelector } from "react-redux";
import { followMainPathname } from '../../features/followPathname/followPathnameSlice';
import { Link } from 'react-router-dom';
import 'animate.css';

export const Home = () => {
    const [nameField, setNameField] = useState('home-page-typing-text-block-typing-text-name-field');
    const [time, setTime] = useState();
    const [text, setText] = useState('');
    const [scrollIcon, setScrollIcon] = useState('hide-scroll-button');
    const [showContent, setShowContent] = useState('hidden-content');
    const currentPathname = useSelector(followMainPathname);

    setTimeout(() => {
        setNameField(nameField + ' home-page-typing-text-block-typing-text-show-name-field');
    }, 9500);

    const submitName = (e, value) => {
        e.preventDefault();
        setTime(1000);
        if (value.trim()) {
            setText(`Nice to meet you ${value}...`);
            setTimeout(() => {
                setScrollIcon('show-scroll-button');
            }, 2900);
        }
        e.target[0].value = ' ';
    }

    const scrollToBottom = () => {
        setTimeout(() => {
            window.scrollTo(0, 350);
        }, 50)
        setTimeout(() => {
            setScrollIcon(scrollIcon + ' hide-scroll-button');
        }, 200);
        setShowContent('show-content');
    }

    return (
        <div className="home-page mt-2">
            <div className="home-page-typing-text-block">
                <img src={myImage} className='home-page-typing-text-block-my-image' width='200' alt="myImage" />
                <div className="home-page-typing-text-block-typing-text">
                    {
                        currentPathname.length <= 1 ?
                            <>
                                <TypeAnimationComp time={1000} text={'Hello'} tag={'h2'} />
                                <TypeAnimationComp time={2000} text={'Welcome to my github page'} tag={'h2'} />
                                <TypeAnimationComp time={4000} text={'My name is Narek'} tag={'h2'} />
                                <TypeAnimationComp time={5500} text={'I am a junior front-end developer'} tag={'h2'} />
                                <TypeAnimationComp time={7800} text={'What is your name?'} tag={'h2'} />
                                <form action="" onSubmit={(e) => submitName(e, e.target[0].value)}>
                                    <input type="text" className={nameField} />
                                </form>
                                <TypeAnimationComp time={time} text={text} tag={'h2'} />
                            </> :
                            <TypeAnimationComp time={1000} text={'Welcome to back...'} tag={'h1'} />
                    }
                </div>
            </div>

            {
                currentPathname.length <= 1 &&
                <div className="container mt-5 text-center home-page-circle-to-scroll-bottom">
                    <ArrowDownwardIcon className={scrollIcon} sx={{
                        fontSize: 50,
                        boxShadow: '0px 0px 50px 18px blue',
                        borderRadius: 50
                    }} onClick={scrollToBottom} />
                </div>
            }

            <div className={currentPathname.length <= 1 ? showContent : 'show-content'}>
                <h1 className={currentPathname.length <= 1 ?
                    'animate__animated animate__backInUp animate__slow show-content-title' :
                    'show-content-title'}>
                    About me
                </h1>

                <h5 className={currentPathname.length <= 1 ?
                    'animate__animated animate__backInUp animate__slow show-content-text' :
                    'show-content-text'}
                >
                    Hi, I'm Narek and this is my GitHub page, like a blog or portfolio. I'm a journalist
                    studying at YSU in the Faculty of Journalism. I'm working at the Fact Investigative
                    Portal “FIP.am”. After that I worked at “Infocom.am” the same profesion.
                    I'm a fact-checker, I investigate official and official people's announcements and determine
                    whether they are right. From time to time I also do investigations and try to find
                    out corruption schemes.

                    <div className={'show-content-text-special-block'}>
                        Over the past two years, I've had a
                        <ul>
                            <li> “WatchDog” journalism certificate of participation</li>
                            <li> I was awarded an incentive prize in the “Tvapatum 2020” journalism competition</li>
                            <li> I won the best article award in the "Fact-Checking Journalism Competition 2020"</li>
                            <li>
                                I was awarded the "Golden Key" Award for the most active use of the “Freedom of
                                Information Law”
                            </li>
                        </ul>
                    </div>

                    I have a personal blog called “bzbzik” where I repost my articles and from time to time,
                    how to say,“bzbzum em” :D <br /> If you want to read my articles, just
                    <a href="https://www.bzbzik.com/" target={'_blank'} rel="noreferrer"> follow this link</a>.
                    <br /><br />
                    I have always been interested in media literacy, media security, and coding. First, I made a
                    decision to learn front-end development.

                    <div className={'show-content-text-special-block'}>
                        Over the past six months, I've learned
                        <ul>
                            <li>HTML 5</li>
                            <li>CSS 3 (SCSS)</li>
                            <li>Bootstrap</li>
                            <li>Javascript (JQuery, AJAX)</li>
                            <li>React JS (MUI)</li>
                            <li>Axios</li>
                            <li>Git (GitHub)</li>
                        </ul>
                    </div>

                    I know that I have more practice to improve my skills, but now I can work with these tools.
                    This GitHub page was created using React JS because the most I liked exactly React JS framework.

                    <div className={'show-content-text-special-block'}>
                        I think my most stronger skills are
                        <ul>
                            <li>learn new technologies quickly</li>
                            <li>spend a lot of time in front of the computer</li>
                            <li>find all the information I need from Google</li>
                        </ul>

                        All I need to work well is a
                        <ul>
                            <li>computer</li>
                            <li>internet</li>
                            <li>headset</li>
                        </ul>
                    </div>

                    If you'd like to see my works, please visit the <Link to={'/portfolio'}>Portfolio page</Link>. <br />
                    If you'd like to contact me, please visit the <Link to={'/contact'}>Contact page</Link>.

                </h5>
            </div>
        </div>
    )
}
