import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginSignup from './pages/Login-Signup';
import About from './pages/About';
import ELearning from './pages/E-learning';
import Class from './pages/Class';
// import { classesData } from './components/ClassesData';
import { useState, useEffect } from 'react';

export default function Router(){
    
    const [classesData, setClassesData] = useState([])

    useEffect(() => {
        const getClassesData = async() => {
            let response = await fetch("https://umar-api.000webhostapp.com/jcode/classes/")
            response = await response.json()
            response = response.map(item => ({...item, topic_list: JSON.parse(item.topic_list)}))

            setClassesData(response)
        }

        getClassesData()
    }, [])

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