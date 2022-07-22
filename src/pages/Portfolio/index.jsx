import Card from "../../components/Card";
import tictactoe from './img/tictactoe.png';
import todo from './img/todo.png';
import memoryGame from './img/memoryGame.png';
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
                    img={memoryGame}
                    title={'Memory Game'}
                    text={'The cards have a pictures on one side and each picture appears on two cards. The game starts with all the cards face down and players take turns to turn over two cards.'}
                    url={'/portfolio/memorygame'}
                />
            </div>
        </div>
    )
}
