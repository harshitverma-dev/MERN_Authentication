import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import TopBar from './components/TopBar';
import './style.css'

function App() {
    return (
        <div className="App">
            <Router>
                <TopBar />
                <div className='bg-color'>
                    <Routes>
                        <Route path='home' element={<Home />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
