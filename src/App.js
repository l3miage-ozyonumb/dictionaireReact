import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Dictionnaire, Header } from './components/Header';
import Definition from './components/Definition';

//Create context 
//export const InputContext = React.createContext();


function App() {

  const [word, setWord] = useState("");


  return (
    <div className="App">
      <Header word={word} setWord = {setWord}/>
      <Definition word = {word}/>
      </div>
  );
}

export default App;
