import React from 'react';
import MainScreen from './components/MainScreen';
import {useState,useEffect} from 'react';
import "./styles/style.css";

function App() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(()=>{
            setLoading(false)
        },2000)
    }, [])

    return (
      <>
        {loading === false ? (
          <MainScreen />
        ) : (
          <div className="App">
            <img
              src="/Images/xorai_logo.png"
              className="Logo"
              alt="logo"
            />
          </div>
        )}
      </>
    );
}

export default App
