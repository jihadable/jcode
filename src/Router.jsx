import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginSignup from './pages/Login-Signup';
import About from './pages/About';
import ELearning from './pages/E-learning';
import Class from './pages/Class';
import ClassesProvider from './contexts/ClassesContext';
import NotFound from './pages/NotFound';
import ClassOutlet from './components/ClassOutlet';

export default function Router(){

    return (
        <BrowserRouter>
            <ClassesProvider>
                <Routes>
                    <Route path='*' element={<NotFound />}></Route>
                    <Route path='/' exact element={<Home />}></Route>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/e-learning' element={<ELearning />}></Route>
                    <Route path='/e-learning/:slug' element={<ClassOutlet />}>
                        <Route path='/e-learning/:slug' element={<Class />}></Route>
                    </Route>
                    <Route path='/login' element={<LoginSignup page={"login"} />}></Route>
                    <Route path='/signup' element={<LoginSignup page={"signup"} />}></Route>
                </Routes>
            </ClassesProvider>
        </BrowserRouter>
    )
}