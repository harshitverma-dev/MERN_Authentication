import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import TopBar from './components/TopBar';
import './style.css'
import Login from './pages/Login';
import Signup from './pages/Signup';
import { AuthUser } from './context/authContext';
import { useContext } from 'react';

function App() {
    const { authstate } = useContext(AuthUser);
    return (
        <div className="App">
            <Router>
                <TopBar />
                <div className={`${authstate?.user ? 'bg-color' : 'bg-color-auth'}`}>
                    <Routes>
                        <Route path='/' element={authstate?.user ? <Home /> : <Navigate to='auth/login' />} />
                        <Route path='auth/login' element={!authstate?.user ? <Login /> : <Navigate to='/' />} />
                        <Route path='auth/signup' element={!authstate?.user ? <Signup /> : <Navigate to='/' />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
