import { Route, Routes } from 'react-router-dom';
import { Main } from './layoutes/Main';
import { Home } from './pages/Home';
import { Portfolio } from './pages/Portfolio';
import { Articles } from './pages/Articles';
import { Contact } from './pages/Contact';
import { TicTacToe } from './pages/Portfolio/TicTacToe';
import { TodoApp } from './pages/Portfolio/Todo-list';
import { MemoryGame } from './pages/Portfolio/MemoryGame';
import { FixedBrokenTodo } from './pages/Articles/FixedBrokenTodo';
import { EmailJS } from './pages/Articles/EmailJS';
import { WeatherApp } from './pages/Portfolio/WeatherApp';
import { RandomUser } from './pages/Portfolio/RandomUser';
import { RandomAdvice } from './pages/Portfolio/RandomAdvice';
import { Morse } from './pages/Morse';

const MyRoutes = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Main />}>
                    <Route path='/home' element={<Home />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                    <Route path='/articles' element={<Articles />} />
                    <Route path='/articles/fixedbrokentodo' element={<FixedBrokenTodo />} />
                    <Route path='/articles/emailJS' element={<EmailJS />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/portfolio/tictactoe' element={<TicTacToe />} />
                    <Route path='/portfolio/todo' element={<TodoApp />} />
                    <Route path='/portfolio/memorygame' element={<MemoryGame />} />
                    <Route path='/portfolio/weatherapp' element={<WeatherApp />} />
                    <Route path='/portfolio/randomuser' element={<RandomUser />} />
                    <Route path='/portfolio/randomadvice' element={<RandomAdvice />} />
                    <Route path='/portfolio/morse' element={<Morse />} />
                </Route>
            </Routes>
        </>
    )
}

export default MyRoutes
