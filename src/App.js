import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
    setInterval(()=> {
      setAlert(null)
    }, 1500)
  }

  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#2d2d2d";
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (

    <Router>

    <Navbar title="TextUtiles" navLink1="Home" navLink2="About" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />

    <Routes>
    <Route exact path="/" element={<TextForm headtitle="Enter text below"  mode={mode} showAlert={showAlert} />} />
    <Route exact path="/about" element={<About />} />
    </Routes>

    </Router>

  );
}

export default App;
