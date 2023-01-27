import { OneCard as Card } from '../../components/Card';
import { WebsiteCard } from '../../components/WebsiteCard';
import tictactoe from './img/tictactoe.png';
import todo from './img/todo.png';
import memoryGame from './img/memoryGame.png';
import weatherApp from './img/weatherApp.png';
import randomUser from './img/randomUser.png';
import randomAdvice from './img/randomAdvice.png';
import morse from "./img/morse.png";
import ledress from "./img/ledress.png";
import luigis from "./img/luigiis.png";
import megaStore from "./img/megaStore.jpg"
import './portfolio.scss';
import 'animate.css';
import { useSelector } from 'react-redux';
import { followPortfolioPathname } from '../../features/followPathname/followPathnameSlice';


export const Portfolio = () => {
    const currentPathname = useSelector(followPortfolioPathname);

    return (
        <>
            <div className={currentPathname?.length <= 1 ?
                'row d-flex mx-auto portfolio animate__animated animate__backInDown mt-5' :
                "row d-flex mx-auto portfolio"}
            >
                <h1 className='text-center'>Websites</h1>
                <WebsiteCard
                    img={megaStore}
                    title={"The Mega Store | Մեգա Խանութ"}
                    text={"Tools: HTML, SCSS, Bootstrap, JavaScript, React JS, RESTfulAPI, Redux "}
                    url={"https://narek-martirosyan.github.io/megaStore/"}
                />
                <WebsiteCard
                    img={ledress}
                    title={"Ledress | online shopping website"}
                    text={"Tools: HTML, SCSS, Bootstrap, JavaScript, React JS, RESTfulAPI, Redux "}
                    url={"https://narek-martirosyan.github.io/ledress/"}
                />
                <WebsiteCard
                    img={luigis}
                    title={"Luigis | online pizzeria"}
                    text={"Tools: HTML, SCSS, Bootstrap, JavaScript, React JS, RESTfulAPI, Redux "}
                    url={"https://narek-martirosyan.github.io/luigis/"}
                />

            </div>

            <div className={currentPathname?.length <= 1 ?
                "row d-flex mx-auto portfolio animate__animated animate__backInDown mt-5" :
                "row d-flex mx-auto portfolio mt-5"}
            >
                <h1 className='text-center'>Applications and games</h1>
                <Card
                    img={morse}
                    title={'English to Morse'}
                    text={'English - Morse code translator: Learn and Enjoy:)'}
                    url={'/portfolio/morse'}
                />
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
        </>
    )
}
