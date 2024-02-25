import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState} from "react"
import CurrentLocation from './CurrentLocation';

function App() {
  return (
    <div className="App" >
     <CurrentLocation/>
    </div>
  );
}

export default App;
