import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginSignup from './pages/Login-Signup';
import About from './pages/About';
import ELearning from './pages/E-learning';
import { classesData } from './components/ClassesData';
import Class from './pages/Class';

export default function Router(){

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/e-learning' element={<ELearning />}></Route>
                {
                    classesData.map((item, index) => {
                        return <Route path={`e-learning/${item.link}`} element={<Class item={item} />} key={index}></Route>
                    })
                }
                <Route path='/login' element={<LoginSignup page={"login"} />}></Route>
                <Route path='/signup' element={<LoginSignup page={"signup"} />}></Route>
            </Routes>
        </BrowserRouter>
    )
}