import TypeAnimation from "../../components/TypeAnimation";
import './style.scss';
import myImage from './img/myPic.png';
import { useState } from "react";

export default function Home() {
    const [nameField, setNameField] = useState('name-field');
    const [time, setTime] = useState();
    const [text, setText] = useState('');
    setTimeout(() => {
        setNameField(nameField + ' show-name-field')
    }, 14000);

    function submitName(e, value) {
        e.preventDefault();
        setTime(1000);
        setText(`Nice to meet you ${value}...`);
        e.target[0].value = ' ';
    }

    return (
        <div className="home-page mt-2">
            <div className="typing-text-block">
                <img src={myImage} className='my-image' width='200' alt="my image" />
                <div className="typing-text">
                    <TypeAnimation time={2000} text={'Hello'} />
                    <TypeAnimation time={4000} text={'My name is Narek'} />
                    <TypeAnimation time={6000} text={'I am junior web developer'} />
                    <TypeAnimation time={9000} text={'And this is my first website'} />
                    <TypeAnimation time={12000} text={'What is your name?'} />
                    <form action="" onSubmit={(e) => submitName(e, e.target[0].value)}>
                        <input type="text" className={nameField} />
                    </form>
                    <TypeAnimation time={time} text={text} />
                </div>
            </div>


        </div>
    )
}