import TypeAnimation from "../../components/TypeAnimation";
import './style.scss';
import myImage from './img/myPic.png';
import { useState } from "react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function Home() {
    const [nameField, setNameField] = useState('name-field');
    const [time, setTime] = useState();
    const [text, setText] = useState('');
    const [scrollIcon, setScrollIcon] = useState('show-scroll-button');
    const [showContent, setShowContent] = useState('hidden-content')
    setTimeout(() => {
        setNameField(nameField + ' show-name-field');
    }, 14000);

    function submitName(e, value) {
        e.preventDefault();
        setTime(1000);
        setText(`Nice to meet you ${value}...`);
        e.target[0].value = ' ';
    }

    function scrollToBottom() {
        window.scrollTo(0, 450);
        setScrollIcon(scrollIcon + ' hide-scroll-button');
        setShowContent('show-content')
    }

    if (scrollIcon.includes('hide-scroll-button')) {
        window.addEventListener('scroll', function (e) {
            setTimeout(() => {
                if (this.scrollY < 300) {
                    setScrollIcon('show-scroll-button');
                }
            }, 1000);
        })
    }


    return (
        <div className="home-page mt-2">
            <div className="typing-text-block">
                <img src={myImage} className='my-image' width='200' alt="myImage" />
                <div className="typing-text">
                    <TypeAnimation time={2000} text={'Hello'} tag={'h2'} />
                    <TypeAnimation time={4000} text={'My name is Narek'} tag={'h2'} />
                    <TypeAnimation time={6000} text={'I am a junior front-end developer'} tag={'h2'} />
                    <TypeAnimation time={9000} text={'And this is my first website'} tag={'h2'} />
                    <TypeAnimation time={12000} text={'What is your name?'} tag={'h2'} />
                    <form action="" onSubmit={(e) => submitName(e, e.target[0].value)}>
                        <input type="text" className={nameField} />
                    </form>
                    <TypeAnimation time={time} text={text} tag={'h2'} />
                </div>
            </div>

            <div className="container mt-5 text-center circle-button-to-scroll-bottom">
                <ArrowDownwardIcon className={scrollIcon} sx={{
                    fontSize: 50,
                    boxShadow: '0px 0px 50px 18px blue',
                    borderRadius: 50
                }} onClick={scrollToBottom} />
            </div>

            <div className={showContent}>
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
