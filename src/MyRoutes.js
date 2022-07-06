import { Route, Routes } from 'react-router-dom';
import Main from './layoutes/Main';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';

export default function MyRoutes() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Main />}>
                    <Route path='/home' element={<Home />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                </Route>
            </Routes>
        </>
    )
}
