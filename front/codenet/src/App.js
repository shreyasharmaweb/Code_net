
import './App.css';
import Login from './components/Login';
import Match from './components/Match';
import SignUp from './components/SignUp';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
import Register from './components/Register';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      
    
    
      <BrowserRouter>
      
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/match" element={<Match/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<SignUp/>} />
          <Route path="/details" element={<Register/>} />
          <Route path="/profiles" element={<Profile/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </div>
    </BrowserRouter>

    </div>
  );
}

export default App;
