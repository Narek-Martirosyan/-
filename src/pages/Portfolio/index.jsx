import Card from "../../components/Card";
import tictactoe from './img/tictactoe.png';
import todo from './img/todo.png';
import './style.scss';

export default function Portfolio() {
    return (
        <div>
            <div className="row d-flex mx-auto portfolio">
                <Card
                    img={tictactoe}
                    title={'Tic Tac Toe'}
                    text={'The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner'}
                    url={'/portfolio/tictactoe'}
                />
                <Card
                    img={todo}
                    title={'Todo list'}
                    text={'ToDo List App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do'}
                    url={'/portfolio/todo'}
                />
                <Card
                    img={tictactoe}
                    title={'Tic Tac Toe'}
                    text={'The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner'}
                    url={'/portfolio/tictactoe'}
                />
            </div>
        </div>
    )
}
