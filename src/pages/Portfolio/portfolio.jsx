import { OneCard as Card } from '../../components/Card';
import tictactoe from './img/tictactoe.png';
import todo from './img/todo.png';
import memoryGame from './img/memoryGame.png';
import weatherApp from './img/weatherApp.png';
import randomUser from './img/randomUser.png';
import randomAdvice from './img/randomAdvice.png';
import './portfolio.scss';
import 'animate.css';
import { useSelector } from 'react-redux';
import { followPortfolioPathname } from '../../features/followPathname/followPathnameSlice';


export const Portfolio = () => {
    const currentPathname = useSelector(followPortfolioPathname);

    return (
        <div>
            <div className={currentPathname?.length <= 1 ?
                "row d-flex mx-auto portfolio animate__animated animate__backInDown" :
                "row d-flex mx-auto portfolio"}>
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
                <Card
                    img={weatherApp}
                    title={'Weather application'}
                    text={'The Weather app provides real-time weather information for over 200 locations'}
                    url={'/portfolio/weatherapp'}
                />
                <Card
                    img={randomUser}
                    title={'Random user generator'}
                    text={'This app generate over 5000 random users'}
                    url={'/portfolio/randomuser'}
                />
                <Card
                    img={randomAdvice}
                    title={'Random advice generator'}
                    text={'This app generate random advices with random images'}
                    url={'/portfolio/randomadvice'}
                />
            </div>
        </div>
    )
}
