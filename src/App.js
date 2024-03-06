import './App.css';
import LandingPage from './LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Spa from './Spa';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Spa' element={<Spa/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;