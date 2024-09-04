
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const removeBodyClasses = () => {
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-danger");
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add("bg-" + cls);
    if (mode == 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#082242';
      showAlert("Dark Mode has been enabled!", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled!", "success")
    }
  }

  return (
    <>
      {/* <BrowserRouter> */}

        <Navbar findText='dhoondo' mode={mode} toggleMode={toggleMode} title='TextUtils' aboutText='About' />
        <Alert alert={alert} />

        {/* <Routes>
          <Route path='/' element={<div className="container my-3">
            <TextForm showAlert={showAlert} heading="Enter the text to analyze-" mode={mode} />
          </div>} />
          <Route path='/about' element={<About />} />
        </Routes> */}
        <div className="container my-3">
            <TextForm showAlert={showAlert} heading="Enter the text to analyze-" mode={mode} />
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
