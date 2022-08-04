import { useState } from 'react';
import './ticTacToe.scss';
import checkWinner from './checkWinner';
import 'animate.css';

export const TicTacToe = () => {
    const [items, setItems] = useState([
        { title: '' },
        { title: '' },
        { title: '' },
        { title: '' },
        { title: '' },
        { title: '' },
        { title: '' },
        { title: '' },
        { title: '' },
    ]);
    const [xorO, setXorO] = useState(true);
    const [oneItemClass, setOneItemClass] = useState('one-item');
    let [sum, setSum] = useState(1);

    const printXorO = (e, item) => {
        if (xorO) {
            item.title = 'X';
            setXorO(!xorO);
        } else {
            item.title = 'O';
            setXorO(!xorO);
        }
        e.target.classList.value = 'one-item disabled';

        setItems([...items])

        if (sum >= 5) {
            checkWinner(items, setItems, sum, setSum, setOneItemClass, setXorO);
        }

        setSum(sum += 1);
    }

    return (
        <div className='tic-tac-toe animate__animated animate__zoomIn'>
            {items.map((item, index) => {
                return (
                    <div
                        key={index}
                        className={oneItemClass}
                        onClick={(e) => { printXorO(e, item) }}>
                        {
                            item.title === 'X' ?
                                <span style={{ color: 'blue' }}>{item.title}</span> :
                                <span style={{ color: 'red' }}>{item.title}</span>
                        }
                    </div>
                )

            })}
        </div>
    )
}
