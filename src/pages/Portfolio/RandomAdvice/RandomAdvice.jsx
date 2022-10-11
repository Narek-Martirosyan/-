import './randomAdvice.scss';
import { useState } from "react";
import { randomAdvice } from "../../../axios/RandomAdviceAPI"
import { useEffect } from 'react';
import 'animate.css';

export const RandomAdvice = () => {
    const [data, setData] = useState([]);
    const [randomNum, setRandomNum] = useState(1);

    useEffect(() => {
        randomAdvice().then(res => setData(res.data.slip));
    }, []);

    const randomAdviceHandler = async () => {
        const res = await randomAdvice();
        setRandomNum(randomNum + 1);
        setData(res.data.slip);

    }

    return (
        <>
            <div className="random-background animate__animated animate__zoomIn"
                style={{ backgroundImage: `url("https://picsum.photos/700/500?random-${randomNum}")` }}>
            </div>
            <div className='random-advice animate__animated animate__zoomIn'>
                <h4>{data.advice}</h4>
                <div className='button-advice'>
                    <button onClick={randomAdviceHandler}>Give me advice</button>
                </div>
            </div>
        </>

    )
}
