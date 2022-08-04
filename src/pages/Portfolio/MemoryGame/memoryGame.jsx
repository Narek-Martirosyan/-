import './memoryGame.scss';
import a from './img/1.jpg';
import b from './img/2.jpg';
import c from './img/3.jpg';
import d from './img/4.jpg';
import e from './img/5.jpg';
import f from './img/6.jpg';
import g from './img/7.jpg';
import h from './img/8.jpg';
import bckg from './img/background.jpg';
import { useEffect, useState } from 'react';
import gameOverHandler from './gameOverHandler';
import gameHandler from './gameHandler';
import 'animate.css';

const partOfImages = [
    { id: '01', image: a, class: 'one-item disable' },
    { id: '02', image: b, class: 'one-item disable' },
    { id: '03', image: c, class: 'one-item disable' },
    { id: '04', image: d, class: 'one-item disable' },
    { id: '05', image: e, class: 'one-item disable' },
    { id: '06', image: f, class: 'one-item disable' },
    { id: '07', image: g, class: 'one-item disable' },
    { id: '08', image: h, class: 'one-item disable' },
];
const images = partOfImages.concat(partOfImages);

const shuffleCards = () => {
    for (let i = images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = images[i];
        images[i] = images[j];
        images[j] = temp;
    }
}

shuffleCards()

export const MemoryGame = () => {

    const [mainBackground, setMainBackground] = useState([
        { id: '01', image: bckg, class: 'one-item' },
        { id: '02', image: bckg, class: 'one-item' },
        { id: '03', image: bckg, class: 'one-item' },
        { id: '04', image: bckg, class: 'one-item' },
        { id: '05', image: bckg, class: 'one-item' },
        { id: '06', image: bckg, class: 'one-item' },
        { id: '07', image: bckg, class: 'one-item' },
        { id: '08', image: bckg, class: 'one-item' },
        { id: '01', image: bckg, class: 'one-item' },
        { id: '02', image: bckg, class: 'one-item' },
        { id: '03', image: bckg, class: 'one-item' },
        { id: '04', image: bckg, class: 'one-item' },
        { id: '05', image: bckg, class: 'one-item' },
        { id: '06', image: bckg, class: 'one-item' },
        { id: '07', image: bckg, class: 'one-item' },
        { id: '08', image: bckg, class: 'one-item' },
    ]);
    const [print, setPrint] = useState(images);
    const [idContainer, setIdContainer] = useState([]);
    const [openedImageContainer, setOpenedImageContainer] = useState([]);
    const [playAgain, setPlayAgain] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setPrint(mainBackground);
        }, 2000);

        // eslint-disable-next-line
    }, [playAgain])

    const mainGame = (index) => {
        gameHandler(
            print,
            index,
            images,
            idContainer,
            setIdContainer,
            setPrint,
            openedImageContainer,
            setOpenedImageContainer
        )

        gameOverHandler(
            openedImageContainer,
            print,
            setPlayAgain,
            playAgain,
            shuffleCards,
            setPrint,
            images,
            setOpenedImageContainer,
            setMainBackground
        )
    }

    return (
        <div className='memory-game animate__animated animate__zoomIn'>
            {print.map((item, index) => {
                return (
                    <div
                        key={index}
                        className={item.class}
                        style={{ backgroundImage: `url(${item.image})` }}
                        onClick={(e) => mainGame(index)}>
                    </div>
                )
            })}
        </div>
    )
}
