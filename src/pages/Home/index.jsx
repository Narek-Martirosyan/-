import TypeAnimation from "../../components/TypeAnimation";
import './style.scss';
import myImage from './img/myPic.png';
import { useState } from "react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useSelector } from "react-redux";
import { followPathname } from "../../features/homePage/homePageSlice";

export default function Home() {
    const [nameField, setNameField] = useState('name-field');
    const [time, setTime] = useState();
    const [text, setText] = useState('');
    const [scrollIcon, setScrollIcon] = useState('show-scroll-button');
    const [showContent, setShowContent] = useState('hidden-content');
    const currentPathname = useSelector(followPathname);

    setTimeout(() => {
        setNameField(nameField + ' show-name-field');
    }, 10000);

    function submitName(e, value) {
        e.preventDefault();
        setTime(1000);
        if (value.trim()) {
            setText(`Nice to meet you ${value}...`);
        }
        e.target[0].value = ' ';
    }

    function scrollToBottom() {
        setTimeout(() => {
            window.scrollTo(0, 450);
        }, 50)
        setScrollIcon(scrollIcon + ' hide-scroll-button');
        setShowContent('show-content')
    }

    return (
        <div className="home-page mt-2">
            <div className="typing-text-block">
                <img src={myImage} className='my-image' width='200' alt="myImage" />
                <div className="typing-text">
                    {
                        !currentPathname.length ?
                            <>
                                <TypeAnimation time={1000} text={'Hello'} tag={'h2'} />
                                <TypeAnimation time={2000} text={'My name is Narek'} tag={'h2'} />
                                <TypeAnimation time={4000} text={'I am a junior front-end developer'} tag={'h2'} />
                                <TypeAnimation time={6500} text={'And this is my first website'} tag={'h2'} />
                                <TypeAnimation time={8500} text={'What is your name?'} tag={'h2'} />
                                <form action="" onSubmit={(e) => submitName(e, e.target[0].value)}>
                                    <input type="text" className={nameField} />
                                </form>
                                <TypeAnimation time={time} text={text} tag={'h2'} />
                            </> :
                            <TypeAnimation time={1000} text={'Welcome to back...'} tag={'h1'} />
                    }
                </div>
            </div>

            {
                !currentPathname.length &&
                <div className="container mt-5 text-center circle-button-to-scroll-bottom">
                    <ArrowDownwardIcon className={scrollIcon} sx={{
                        fontSize: 50,
                        boxShadow: '0px 0px 50px 18px blue',
                        borderRadius: 50
                    }} onClick={scrollToBottom} />
                </div>
            }

            <div className={!currentPathname.length ? showContent : 'show-content'}>
                <h1>text</h1>
                <h1>text</h1>
                <h1>text</h1>
                <h1>text</h1>
                <h1>text</h1>
                <h1>text</h1>
                <h1>text</h1>
                <h1>text</h1>
                <h1>text</h1>
                <h1>text</h1>
                <h1>text</h1>
                <h1>text</h1>
                <h1>text</h1>
                <h1>text</h1>
                <h1>text</h1>
                <h1>text</h1>
                <h1>text</h1>
            </div>


        </div>
    )
}
