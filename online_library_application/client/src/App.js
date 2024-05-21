import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/HomeComponent/Home';
import Login from './Components/LoginComponent/Login';
import SignUp from './Components/SignUpComponent/SignUp';
//import Navbar from './Components/NavbarComponent/Nav';
function App() {
  return (
    <div className="App">
      <home/>
      <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
