
import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Login from './pages/login/login';
import Main from './pages/main/main';
import Signup from './pages/signup/signup';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/main" element={<Main/>} />
      
    </Routes>
    </Router>
  );
}

export default App;
