import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/home';
import Login from './Pages/login';
import Register from './Pages/register';
import AboutUs from './Pages/aboutUs';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
            <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/aboutUs' element={<AboutUs/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />

            </Routes>



            </BrowserRouter>
        </div>
    );
}

export default App;
