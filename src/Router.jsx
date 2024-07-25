import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './contexts/AuthContext';
import ProblemProvider from './contexts/ProblemContext';
import SubmissionProvider from './contexts/SubmissionContext';
import About from './pages/About';
import Account from './pages/Account';
import ClassDetail from './pages/ClassDetail';
import Classes from './pages/Classes';
import Codex from './pages/Codex';
import Exercise from './pages/Exercise';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

export default function Router(){

    return (
        <BrowserRouter>
            <AuthProvider>
            <ProblemProvider>
            <SubmissionProvider>
            <ToastContainer
            position="top-center"
            autoClose={750}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            draggable
            theme="light" />
            <Routes>
                <Route path='/' exact element={<Home />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/codex' element={<Codex />}></Route>
                <Route path='/codex/:slug' element={<Exercise />}></Route>
                <Route path='/classes' element={<Classes />}></Route>
                <Route path='/classes/:slug' element={<ClassDetail />}></Route>
                <Route path='/account' element={<Account />}></Route>
                <Route path='/signin' element={<Signin />}></Route>
                <Route path='/signup' element={<Signup />}></Route>
                <Route path='*' element={<NotFound />}></Route>
            </Routes>
            </SubmissionProvider>
            </ProblemProvider>
            </AuthProvider>
        </BrowserRouter>
    )
}